import { ref, get as dbGet, set as dbSet } from "firebase/database";
import { db, authReady } from "./firebase.js";

export const storage = {
  async get(key) {
    await authReady;
    const snapshot = await dbGet(ref(db, key));
    return snapshot.exists() ? { value: snapshot.val() } : null;
  },
  async set(key, value) {
    await authReady;
    await dbSet(ref(db, key), value);
  },
};
