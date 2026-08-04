import { ref, get as dbGet, set as dbSet } from "firebase/database";
import { db, authReady } from "./firebase.js";

function isEmpty(value) {
  if (value == null || value === '') return true;
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.length === 0;
    if (typeof parsed === 'object') return Object.keys(parsed).length === 0;
  } catch (e) {
    return false;
  }
  return false;
}

export const storage = {
  async get(key) {
    const local = localStorage.getItem(key);
    try {
      await authReady;
      const snapshot = await dbGet(ref(db, key));
      if (snapshot.exists()) {
        const remote = snapshot.val();
        // Un Firebase vide ne doit jamais écraser silencieusement de vraies
        // données locales (ex : tout premier sync juste après l'activation
        // de l'authentification). On fait alors confiance au cache local et
        // on le renvoie vers Firebase pour réparer l'état distant.
        if (isEmpty(remote) && !isEmpty(local)) {
          dbSet(ref(db, key), local).catch(() => {});
          return { value: local };
        }
        localStorage.setItem(key, remote);
        return { value: remote };
      }
    } catch (e) {
      console.error("Firebase indisponible, lecture depuis le cache local", e);
    }
    return local === null ? null : { value: local };
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    try {
      await authReady;
      await dbSet(ref(db, key), value);
    } catch (e) {
      console.error("Firebase indisponible, sauvegarde locale uniquement", e);
    }
  },
};
