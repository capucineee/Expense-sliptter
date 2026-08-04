import { ref, get as dbGet, set as dbSet } from "firebase/database";
import { db, authReady } from "./firebase.js";

export const storage = {
  async get(key) {
    try {
      await authReady;
      const snapshot = await dbGet(ref(db, key));
      if (snapshot.exists()) {
        const value = snapshot.val();
        localStorage.setItem(key, value);
        return { value };
      }
    } catch (e) {
      console.error("Firebase indisponible, lecture depuis le cache local", e);
    }
    const local = localStorage.getItem(key);
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
