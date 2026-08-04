import React, { useState, useEffect } from 'react';
import { Trash2, Plus, DollarSign, ArrowLeft, ArrowRight } from 'lucide-react';
import { storage } from './storage.js';

const AVATAR_COLORS = ['bg-teal-500', 'bg-amber-500', 'bg-rose-500', 'bg-violet-500', 'bg-cyan-600', 'bg-emerald-600', 'bg-orange-500', 'bg-indigo-500'];
const FAMILY_ACCENTS = ['border-teal-400', 'border-amber-400', 'border-rose-400', 'border-violet-400', 'border-cyan-400'];

const getInitials = (name) =>
  name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();

const colorFor = (id) => {
  const hash = String(id).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

function Avatar({ id, name, size = 8 }) {
  return (
    <div
      className={`rounded-full ${colorFor(id)} text-white font-bold flex items-center justify-center flex-shrink-0`}
      style={{ width: `${size * 4}px`, height: `${size * 4}px`, fontSize: `${size * 1.3}px` }}
    >
      {getInitials(name)}
    </div>
  );
}

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
        balances[member.id] = { name: member.name, familyName: family.name, familyId: family.id, balance: 0 };
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

  const calculateFamilySettlement = () => {
    const memberBalances = calculateSettlement();
    const familyBalances = {};

    families.forEach(family => {
      familyBalances[family.id] = { name: family.name, balance: 0 };
    });

    Object.values(memberBalances).forEach(({ familyId, balance }) => {
      if (familyBalances[familyId]) {
        familyBalances[familyId].balance += balance;
      }
    });

    return familyBalances;
  };

  const getFamilyTransactions = () => {
    const balances = Object.fromEntries(
      Object.entries(calculateFamilySettlement()).map(([id, v]) => [id, { ...v }])
    );
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
        to: creditor.name,
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
      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-white pb-10">
        <div className="max-w-md mx-auto px-4 pt-8">
          <div className="text-center mb-7">
            <div className="text-5xl mb-2">🏖️</div>
            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Partage Vacances</h1>
            <p className="text-slate-500 text-sm mt-1">Répartissez les frais entre familles, sans prise de tête</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">👥</span>
              <h2 className="text-lg font-bold text-slate-800">Mes familles</h2>
            </div>

            {families.length === 0 ? (
              <div className="border-2 border-dashed border-slate-200 rounded-xl py-8 px-4 text-center text-slate-400 text-sm mb-2">
                Aucune famille pour l'instant.<br />Ajoute-en une ci-dessous pour commencer.
              </div>
            ) : (
              <div className="space-y-3 mb-5">
                {families.map((family, idx) => (
                  <div key={family.id} className={`rounded-xl border-t-4 ${FAMILY_ACCENTS[idx % FAMILY_ACCENTS.length]} bg-slate-50 p-4`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-slate-800">{family.name}</h3>
                      <button
                        onClick={() => deleteFamily(family.id)}
                        className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 p-1.5 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {family.members.length === 0 ? (
                      <p className="text-slate-400 text-xs italic mb-3">Aucun membre pour l'instant</p>
                    ) : (
                      <div className="space-y-1.5 mb-3">
                        {family.members.map(member => (
                          <div key={member.id} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                            <div className="flex items-center gap-2.5">
                              <Avatar id={member.id} name={member.name} size={7} />
                              <div>
                                <p className="text-sm font-semibold text-slate-800 leading-tight">{member.name}</p>
                                <p className="text-[11px] text-slate-400 leading-tight">{member.shares} {member.shares > 1 ? 'parts' : 'part'}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => deletePersonFromFamily(family.id, member.id)}
                              className="text-slate-300 hover:text-rose-500 p-1 rounded"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-1 space-y-2">
                      <input
                        type="text"
                        placeholder="Ajouter une personne..."
                        value={newPersonByFamily[family.id]?.name || ''}
                        onChange={(e) => setNewPersonByFamily({
                          ...newPersonByFamily,
                          [family.id]: { ...newPersonByFamily[family.id], name: e.target.value, shares: newPersonByFamily[family.id]?.shares || 1 }
                        })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                      />
                      <div className="flex gap-2">
                        <select
                          value={newPersonByFamily[family.id]?.shares || 1}
                          onChange={(e) => setNewPersonByFamily({
                            ...newPersonByFamily,
                            [family.id]: { ...newPersonByFamily[family.id], shares: parseInt(e.target.value), name: newPersonByFamily[family.id]?.name || '' }
                          })}
                          className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                          {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n > 1 ? 'parts' : 'part'}</option>)}
                        </select>
                        <button
                          onClick={() => addPersonToFamily(family.id)}
                          className="bg-teal-600 text-white px-3.5 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <p className="text-xs font-semibold text-slate-500">Nouvelle famille ou groupe</p>
              <input
                type="text"
                placeholder="Ex: Famille Dupont, Amis..."
                value={newFamilyName}
                onChange={(e) => setNewFamilyName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button
                onClick={addFamily}
                className="w-full bg-slate-800 text-white px-4 py-2.5 rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 font-semibold text-sm"
              >
                <Plus size={18} /> Créer
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                setExpenseAmount('');
                setExpensePayer('');
                setSelectedFamiliesForExpense([]);
                setPresentPeople({});
                setScreen('add-expense');
              }}
              disabled={families.length === 0 || families.some(f => f.members.length === 0)}
              className="w-full bg-teal-600 text-white px-4 py-3.5 rounded-2xl hover:bg-teal-700 disabled:bg-slate-200 disabled:text-slate-400 transition-colors flex items-center justify-center gap-2 font-bold shadow-sm"
            >
              <DollarSign size={22} /> Enregistrer une dépense
            </button>

            <button
              onClick={() => setScreen('summary')}
              disabled={expenses.length === 0}
              className="w-full bg-white text-slate-700 border border-slate-200 px-4 py-3 rounded-2xl hover:bg-slate-50 disabled:text-slate-300 disabled:border-slate-100 transition-colors flex items-center justify-center gap-2 font-semibold"
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
      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-white pb-10">
        <div className="max-w-md mx-auto px-4 pt-6">
          <button
            onClick={() => setScreen('home')}
            className="flex items-center gap-2 text-slate-600 font-semibold mb-4 hover:text-slate-800 transition-colors text-sm"
          >
            <ArrowLeft size={20} /> Retour
          </button>

          <h1 className="text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">💳 Enregistrer une dépense</h1>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-5">
            {/* Montant */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Montant</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-300">€</span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-2xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  step="0.01"
                />
              </div>
            </div>

            {/* Qui a payé */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Qui a payé ?</label>
              <select
                value={expensePayer}
                onChange={(e) => setExpensePayer(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
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
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Quelles familles étaient présentes ?</label>
              <div className="space-y-2">
                {families.map(family => {
                  const active = selectedFamiliesForExpense.includes(family.id);
                  return (
                    <button
                      key={family.id}
                      type="button"
                      onClick={() => toggleFamilyForExpense(family.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-colors ${active ? 'border-teal-500 bg-teal-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                    >
                      <span className="font-semibold text-slate-800">{family.name}</span>
                      {active && <span className="text-teal-600 font-bold">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sélection des membres */}
            {selectedFamiliesList.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Qui était à table ?</label>
                <div className="space-y-3">
                  {selectedFamiliesList.map(family => (
                    <div key={family.id}>
                      <p className="font-semibold text-slate-600 mb-2 text-xs">{family.name}</p>
                      <div className="flex flex-wrap gap-2">
                        {family.members.map(member => {
                          const present = (presentPeople[family.id] || []).includes(member.id);
                          return (
                            <button
                              key={member.id}
                              type="button"
                              onClick={() => togglePersonForExpense(family.id, member.id)}
                              className={`flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border-2 transition-colors ${present ? 'border-teal-500 bg-teal-50' : 'border-slate-200 bg-white'}`}
                            >
                              <Avatar id={member.id} name={member.name} size={6} />
                              <span className="text-sm font-medium text-slate-700">{member.name}</span>
                            </button>
                          );
                        })}
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
              className="w-full bg-teal-600 text-white py-3.5 rounded-2xl hover:bg-teal-700 disabled:bg-slate-200 disabled:text-slate-400 transition-colors font-bold text-lg shadow-sm"
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
      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-white pb-10">
        <div className="max-w-md mx-auto px-4 pt-6">
          <button
            onClick={() => setScreen('home')}
            className="flex items-center gap-2 text-slate-600 font-semibold mb-4 hover:text-slate-800 transition-colors text-sm"
          >
            <ArrowLeft size={20} /> Retour
          </button>

          <h1 className="text-xl font-extrabold text-slate-800 mb-6">📊 Récapitulatif</h1>

          {getOrphanedExpenses().length > 0 && (
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 mb-4">
              <p className="text-rose-700 font-bold text-sm mb-1">⚠️ Dépenses ignorées dans les soldes</p>
              <p className="text-rose-700 text-sm">
                {getOrphanedExpenses().length} dépense{getOrphanedExpenses().length > 1 ? 's' : ''} ({getOrphanedExpenses().map(e => `${e.amount.toFixed(2)}€`).join(', ')}) fait{getOrphanedExpenses().length > 1 ? 'ent' : ''} référence à une personne supprimée depuis. Supprime-la{getOrphanedExpenses().length > 1 ? 's' : ''} dans "Toutes les dépenses" ci-dessous et recrée-la{getOrphanedExpenses().length > 1 ? 's' : ''} si besoin.
              </p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-4">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Soldes</h2>
            <div className="space-y-2">
              {Object.entries(settlement).map(([id, data]) => (
                <div
                  key={id}
                  className={`flex items-center justify-between p-3 rounded-xl ${data.balance > 0 ? 'bg-emerald-50' : data.balance < 0 ? 'bg-rose-50' : 'bg-slate-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <Avatar id={id} name={data.name} size={8} />
                    <div>
                      <p className="font-semibold text-slate-800 leading-tight">{data.name}</p>
                      <p className="text-xs text-slate-400 leading-tight">{data.familyName}</p>
                    </div>
                  </div>
                  <span className={`text-lg font-bold ${data.balance > 0 ? 'text-emerald-600' : data.balance < 0 ? 'text-rose-600' : 'text-slate-400'}`}>
                    {data.balance > 0 ? '+' : ''}{data.balance.toFixed(2)}€
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-4">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">💸 À faire</h2>
            {getTransactions().length > 0 ? (
              <div className="space-y-2">
                {getTransactions().map((t, i) => (
                  <div key={i} className="bg-amber-50 border border-amber-200 p-3 rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="font-bold text-slate-800">{t.from}</span>
                      <span className="text-slate-400 text-xs">({t.fromFamily})</span>
                      <ArrowRight size={14} className="text-amber-500 flex-shrink-0" />
                      <span className="font-bold text-slate-800">{t.to}</span>
                      <span className="text-slate-400 text-xs">({t.toFamily})</span>
                    </div>
                    <p className="text-amber-600 font-extrabold text-lg mt-1">{t.amount}€</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-emerald-600 font-semibold text-sm">✓ Tout est réglé !</p>
            )}
          </div>

          {families.length > 1 && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-4">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">🏠 Entre familles</h2>
              <div className="space-y-2 mb-4">
                {Object.entries(calculateFamilySettlement()).map(([id, data]) => (
                  <div
                    key={id}
                    className={`flex items-center justify-between p-3 rounded-xl ${data.balance > 0 ? 'bg-emerald-50' : data.balance < 0 ? 'bg-rose-50' : 'bg-slate-50'}`}
                  >
                    <p className="font-semibold text-slate-800">{data.name}</p>
                    <span className={`text-lg font-bold ${data.balance > 0 ? 'text-emerald-600' : data.balance < 0 ? 'text-rose-600' : 'text-slate-400'}`}>
                      {data.balance > 0 ? '+' : ''}{data.balance.toFixed(2)}€
                    </span>
                  </div>
                ))}
              </div>
              {getFamilyTransactions().length > 0 ? (
                <div className="space-y-2">
                  {getFamilyTransactions().map((t, i) => (
                    <div key={i} className="bg-violet-50 border border-violet-200 p-3 rounded-xl">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-bold text-slate-800">{t.from}</span>
                        <ArrowRight size={14} className="text-violet-500 flex-shrink-0" />
                        <span className="font-bold text-slate-800">{t.to}</span>
                      </div>
                      <p className="text-violet-600 font-extrabold text-lg mt-1">{t.amount}€</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-emerald-600 font-semibold text-sm">✓ Tout est réglé entre familles !</p>
              )}
            </div>
          )}

          {/* Dépenses enregistrées */}
          {expenses.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">📝 Toutes les dépenses</h2>
              <div className="space-y-2">
                {expenses.map(expense => {
                  const payerData = families.flatMap(f => f.members).find(m => String(m.id) === String(expense.payer));
                  return (
                    <div key={expense.id} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-sm">
                      <div className="flex items-center gap-2.5">
                        {payerData && <Avatar id={payerData.id} name={payerData.name} size={7} />}
                        <div>
                          <p className="font-semibold text-slate-800 leading-tight">{payerData?.name || 'Personne supprimée'}</p>
                          <p className="text-xs text-slate-400 leading-tight">{expense.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">{expense.amount.toFixed(2)}€</span>
                        <button
                          onClick={() => deleteExpense(expense.id)}
                          className="text-slate-300 hover:text-rose-500 p-1 rounded"
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
