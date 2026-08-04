import React, { useState, useEffect } from 'react';
import { Trash2, Plus, DollarSign, ArrowLeft } from 'lucide-react';
import { storage } from './storage.js';

export default function FamilyExpenseSplitter() {
  const [families, setFamilies] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [screen, setScreen] = useState('home');

  // Pour ajouter une famille
  const [newFamilyName, setNewFamilyName] = useState('');

  // Pour ajouter une personne - stocké par familyId
  const [newPersonByFamily, setNewPersonByFamily] = useState({});

  // Pour ajouter une dépense
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expensePayer, setExpensePayer] = useState('');
  const [selectedFamiliesForExpense, setSelectedFamiliesForExpense] = useState([]);
  const [presentPeople, setPresentPeople] = useState({});

  // Charger les données
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedFamilies = await storage.get('families-v2');
      const savedExpenses = await storage.get('expenses-v2');
      if (savedFamilies?.value) setFamilies(JSON.parse(savedFamilies.value));
      if (savedExpenses?.value) setExpenses(JSON.parse(savedExpenses.value));
    } catch (e) {
      console.log('Première utilisation');
    }
  };

  const saveFamilies = async (newFamilies) => {
    setFamilies(newFamilies);
    try {
      await storage.set('families-v2', JSON.stringify(newFamilies));
    } catch (e) {
      console.error('Échec de la sauvegarde des familles', e);
    }
  };

  const saveExpenses = async (newExpenses) => {
    setExpenses(newExpenses);
    try {
      await storage.set('expenses-v2', JSON.stringify(newExpenses));
    } catch (e) {
      console.error('Échec de la sauvegarde des dépenses', e);
    }
  };

  // ===== GESTION FAMILLES =====
  const addFamily = () => {
    if (newFamilyName.trim()) {
      const newFamily = {
        id: Date.now(),
        name: newFamilyName,
        members: []
      };
      const updated = [...families, newFamily];
      saveFamilies(updated);
      setNewFamilyName('');
    }
  };

  const deleteFamily = (id) => {
    const updated = families.filter(f => f.id !== id);
    saveFamilies(updated);
  };

  const addPersonToFamily = (familyId) => {
    const personData = newPersonByFamily[familyId];
    if (personData?.name?.trim()) {
      const updated = families.map(f => {
        if (f.id === familyId) {
          return {
            ...f,
            members: [
              ...f.members,
              {
                id: Date.now(),
                name: personData.name,
                shares: personData.shares || 1
              }
            ]
          };
        }
        return f;
      });
      saveFamilies(updated);
      setNewPersonByFamily({
        ...newPersonByFamily,
        [familyId]: { name: '', shares: 1 }
      });
    }
  };

  const deletePersonFromFamily = (familyId, personId) => {
    const updated = families.map(f => {
      if (f.id === familyId) {
        return {
          ...f,
          members: f.members.filter(m => m.id !== personId)
        };
      }
      return f;
    });
    saveFamilies(updated);
  };

  // ===== GESTION DÉPENSES =====
  const toggleFamilyForExpense = (familyId) => {
    if (selectedFamiliesForExpense.includes(familyId)) {
      setSelectedFamiliesForExpense(selectedFamiliesForExpense.filter(f => f !== familyId));
      const newPresentPeople = { ...presentPeople };
      delete newPresentPeople[familyId];
      setPresentPeople(newPresentPeople);
    } else {
      setSelectedFamiliesForExpense([...selectedFamiliesForExpense, familyId]);
      setPresentPeople({
        ...presentPeople,
        [familyId]: []
      });
    }
  };

  const togglePersonForExpense = (familyId, personId) => {
    const current = presentPeople[familyId] || [];
    if (current.includes(personId)) {
      setPresentPeople({
        ...presentPeople,
        [familyId]: current.filter(p => p !== personId)
      });
    } else {
      setPresentPeople({
        ...presentPeople,
        [familyId]: [...current, personId]
      });
    }
  };

  const addExpense = () => {
    const totalPresentPeople = Object.values(presentPeople).flat();
    if (expenseAmount && expensePayer && selectedFamiliesForExpense.length > 0 && totalPresentPeople.length > 0) {
      const expense = {
        id: Date.now(),
        amount: parseFloat(expenseAmount),
        payer: expensePayer,
        families: selectedFamiliesForExpense,
        presentPeople: presentPeople,
        date: new Date().toLocaleDateString('fr-FR')
      };
      const updated = [...expenses, expense];
      saveExpenses(updated);

      setExpenseAmount('');
      setExpensePayer('');
      setSelectedFamiliesForExpense([]);
      setPresentPeople({});
      setScreen('home');
    }
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter(e => e.id !== id);
    saveExpenses(updated);
  };

  // ===== CALCULS =====
  const calculateSettlement = () => {
    const balances = {};

    families.forEach(family => {
      family.members.forEach(member => {
        balances[member.id] = { name: member.name, familyName: family.name, balance: 0 };
      });
    });

    expenses.forEach(expense => {
      const payerId = String(expense.payer);
      if (balances[payerId]) {
        balances[payerId].balance += expense.amount;
      }

      let totalShares = 0;
      const presentMembersWithShares = [];

      Object.entries(expense.presentPeople).forEach(([familyId, memberIds]) => {
        memberIds.forEach(memberId => {
          const family = families.find(f => f.id === parseInt(familyId));
          const member = family?.members.find(m => m.id === memberId);
          if (member) {
            totalShares += member.shares;
            presentMembersWithShares.push({ memberId: String(memberId), shares: member.shares });
          }
        });
      });

      const costPerShare = totalShares > 0 ? expense.amount / totalShares : 0;
      presentMembersWithShares.forEach(({ memberId, shares }) => {
        if (balances[memberId]) {
          balances[memberId].balance -= costPerShare * shares;
        }
      });
    });

    return balances;
  };

  // Dépenses dont le payeur ou toutes les personnes présentes ont depuis été supprimés :
  // elles ne peuvent plus être réparties et sont donc ignorées dans les soldes ci-dessus.
  const getOrphanedExpenses = () => {
    const memberIds = new Set(families.flatMap(f => f.members.map(m => String(m.id))));
    return expenses.filter(expense => {
      const payerExists = memberIds.has(String(expense.payer));
      const presentIds = Object.values(expense.presentPeople).flat().map(String);
      const anyPresentExists = presentIds.some(id => memberIds.has(id));
      return !payerExists || !anyPresentExists;
    });
  };

  const getTransactions = () => {
    const balances = { ...calculateSettlement() };
    const transactions = [];

    while (true) {
      const debtors = Object.entries(balances).filter(([, v]) => v.balance < -0.01);
      const creditors = Object.entries(balances).filter(([, v]) => v.balance > 0.01);

      if (debtors.length === 0 || creditors.length === 0) break;

      const [debtorId, debtor] = debtors[0];
      const [creditorId, creditor] = creditors[0];

      const amount = Math.min(-debtor.balance, creditor.balance);

      transactions.push({
        from: debtor.name,
        fromFamily: debtor.familyName,
        to: creditor.name,
        toFamily: creditor.familyName,
        amount: amount.toFixed(2)
      });

      balances[debtorId].balance += amount;
      balances[creditorId].balance -= amount;
    }

    return transactions;
  };

  const settlement = calculateSettlement();

  // ===== ÉCRAN ACCUEIL =====
  if (screen === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-indigo-900 mb-6 text-center">💰 Partage Vacances</h1>

          {/* Familles */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">👥 Mes Familles</h2>

            {families.length === 0 ? (
              <p className="text-indigo-600 text-center py-4 text-sm">Créez une famille pour commencer</p>
            ) : (
              <div className="space-y-4 mb-6">
                {families.map(family => (
                  <div key={family.id} className="border-2 border-indigo-300 rounded-lg p-4 bg-indigo-50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-indigo-900 text-lg">{family.name}</h3>
                      <button
                        onClick={() => deleteFamily(family.id)}
                        className="text-red-500 hover:bg-red-100 p-2 rounded"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Afficher les membres */}
                    {family.members.length === 0 ? (
                      <p className="text-indigo-600 text-sm italic mb-3">Aucun membre pour l'instant</p>
                    ) : (
                      <div className="bg-white rounded p-2 mb-3 space-y-1">
                        {family.members.map(member => (
                          <div key={member.id} className="flex items-center justify-between text-sm">
                            <div>
                              <span className="font-semibold text-indigo-900">{member.name}</span>
                              <span className="text-indigo-600 ml-2">({member.shares} {member.shares > 1 ? 'parts' : 'part'})</span>
                            </div>
                            <button
                              onClick={() => deletePersonFromFamily(family.id, member.id)}
                              className="text-red-500 hover:bg-red-100 p-1 rounded"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Ajouter une personne */}
                    <div className="border-t-2 border-indigo-300 pt-3">
                      <p className="text-xs font-bold text-indigo-900 mb-2">Ajouter une personne :</p>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Nom"
                          value={newPersonByFamily[family.id]?.name || ''}
                          onChange={(e) => setNewPersonByFamily({
                            ...newPersonByFamily,
                            [family.id]: { ...newPersonByFamily[family.id], name: e.target.value, shares: newPersonByFamily[family.id]?.shares || 1 }
                          })}
                          className="w-full px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <div className="flex gap-2">
                          <select
                            value={newPersonByFamily[family.id]?.shares || 1}
                            onChange={(e) => setNewPersonByFamily({
                              ...newPersonByFamily,
                              [family.id]: { ...newPersonByFamily[family.id], shares: parseInt(e.target.value), name: newPersonByFamily[family.id]?.name || '' }
                            })}
                            className="flex-1 px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n > 1 ? 'parts' : 'part'}</option>)}
                          </select>
                          <button
                            onClick={() => addPersonToFamily(family.id)}
                            className="bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 flex items-center gap-1"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Ajouter une nouvelle famille */}
            <div className="border-t-2 border-indigo-300 pt-4 space-y-2">
              <p className="text-xs font-bold text-indigo-900">Nouvelle famille/groupe :</p>
              <input
                type="text"
                placeholder="Ex: Famille Dupont, Amis..."
                value={newFamilyName}
                onChange={(e) => setNewFamilyName(e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={addFamily}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 font-bold"
              >
                <Plus size={20} /> Créer
              </button>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="space-y-3 mb-4">
            <button
              onClick={() => {
                setExpenseAmount('');
                setExpensePayer('');
                setSelectedFamiliesForExpense([]);
                setPresentPeople({});
                setScreen('add-expense');
              }}
              disabled={families.length === 0 || families.some(f => f.members.length === 0)}
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold text-lg"
            >
              <DollarSign size={24} /> Enregistrer une dépense
            </button>

            <button
              onClick={() => setScreen('summary')}
              disabled={expenses.length === 0}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold"
            >
              📊 Voir le récapitulatif
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== ÉCRAN AJOUTER DÉPENSE =====
  if (screen === 'add-expense') {
    const allMembers = families.flatMap(f => f.members);
    const selectedFamiliesList = families.filter(f => selectedFamiliesForExpense.includes(f.id));

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setScreen('home')}
            className="flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700"
          >
            <ArrowLeft size={24} /> Retour
          </button>

          <h1 className="text-2xl font-bold text-indigo-900 mb-6">💳 Enregistrer une dépense</h1>

          <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            {/* Montant */}
            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Montant (€)</label>
              <input
                type="number"
                placeholder="0.00"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                step="0.01"
              />
            </div>

            {/* Qui a payé */}
            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Qui a payé ?</label>
              <select
                value={expensePayer}
                onChange={(e) => setExpensePayer(e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Sélectionner...</option>
                {allMembers.map(m => {
                  const family = families.find(f => f.members.some(mem => mem.id === m.id));
                  return (
                    <option key={m.id} value={m.id}>
                      {m.name} ({family.name})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Sélection des familles */}
            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Quelles familles étaient présentes ?</label>
              <div className="space-y-2">
                {families.map(family => (
                  <label key={family.id} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-indigo-50">
                    <input
                      type="checkbox"
                      checked={selectedFamiliesForExpense.includes(family.id)}
                      onChange={() => toggleFamilyForExpense(family.id)}
                      className="w-5 h-5 rounded text-indigo-600"
                    />
                    <span className="text-indigo-900 font-semibold">{family.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sélection des membres */}
            {selectedFamiliesList.length > 0 && (
              <div>
                <label className="block text-sm font-bold text-indigo-900 mb-2">Qui était à table ?</label>
                <div className="space-y-3">
                  {selectedFamiliesList.map(family => (
                    <div key={family.id} className="border-l-4 border-indigo-400 pl-3">
                      <p className="font-semibold text-indigo-900 mb-2 text-sm">{family.name}</p>
                      <div className="space-y-1 ml-2">
                        {family.members.map(member => (
                          <label key={member.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={(presentPeople[family.id] || []).includes(member.id)}
                              onChange={() => togglePersonForExpense(family.id, member.id)}
                              className="w-4 h-4 rounded text-indigo-600"
                            />
                            <span className="text-sm text-indigo-900">
                              {member.name}
                              <span className="text-xs text-indigo-600 ml-1">({member.shares} {member.shares > 1 ? 'parts' : 'part'})</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bouton */}
            <button
              onClick={addExpense}
              disabled={!expenseAmount || !expensePayer || selectedFamiliesForExpense.length === 0 || Object.values(presentPeople).flat().length === 0}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 font-bold text-lg mt-4"
            >
              ✓ Enregistrer
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== ÉCRAN RÉCAPITULATIF =====
  if (screen === 'summary') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setScreen('home')}
            className="flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700"
          >
            <ArrowLeft size={24} /> Retour
          </button>

          <h1 className="text-2xl font-bold text-indigo-900 mb-6">📊 Récapitulatif</h1>

          {getOrphanedExpenses().length > 0 && (
            <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4 mb-4">
              <p className="text-red-700 font-bold text-sm mb-1">⚠️ Dépenses ignorées dans les soldes</p>
              <p className="text-red-700 text-sm">
                {getOrphanedExpenses().length} dépense{getOrphanedExpenses().length > 1 ? 's' : ''} ({getOrphanedExpenses().map(e => `${e.amount.toFixed(2)}€`).join(', ')}) fait{getOrphanedExpenses().length > 1 ? 'ent' : ''} référence à une personne supprimée depuis. Supprime-la{getOrphanedExpenses().length > 1 ? 's' : ''} dans "Toutes les dépenses" ci-dessous et recrée-la{getOrphanedExpenses().length > 1 ? 's' : ''} si besoin.
              </p>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-lg font-bold text-indigo-900 mb-3">Soldes</h2>
            <div className="space-y-2">
              {Object.entries(settlement).map(([id, data]) => (
                <div key={id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-indigo-900">{data.name}</p>
                    <p className="text-xs text-indigo-600">{data.familyName}</p>
                  </div>
                  <span className={`text-lg font-bold ${data.balance > 0 ? 'text-green-600' : data.balance < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                    {data.balance > 0 ? '+' : ''}{data.balance.toFixed(2)}€
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-lg font-bold text-indigo-900 mb-3">💸 À faire</h2>
            {getTransactions().length > 0 ? (
              <div className="space-y-2">
                {getTransactions().map((t, i) => (
                  <div key={i} className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-indigo-900 text-sm">
                      <span className="font-bold">{t.from}</span> ({t.fromFamily})<br />
                      paie <span className="font-bold text-lg text-yellow-600">{t.amount}€</span> à<br />
                      <span className="font-bold">{t.to}</span> ({t.toFamily})
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-green-600 font-semibold">✓ Tout est réglé !</p>
            )}
          </div>

          {/* Dépenses enregistrées */}
          {expenses.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-bold text-indigo-900 mb-3">📝 Toutes les dépenses</h2>
              <div className="space-y-2">
                {expenses.map(expense => {
                  const payerData = families.flatMap(f => f.members).find(m => m.id === expense.payer);
                  return (
                    <div key={expense.id} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <div>
                        <p className="font-semibold text-indigo-900">{payerData?.name}</p>
                        <p className="text-xs text-indigo-600">{expense.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-indigo-900">{expense.amount.toFixed(2)}€</span>
                        <button
                          onClick={() => deleteExpense(expense.id)}
                          className="text-red-500 hover:bg-red-100 p-1 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
