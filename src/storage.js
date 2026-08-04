import { ref, get as dbGet, set as dbSet } from "firebase/database";
import { db } from "./firebase.js";

export const storage = {
  async get(key) {
    const snapshot = await dbGet(ref(db, key));
    return snapshot.exists() ? { value: snapshot.val() } : null;
  },
  async set(key, value) {
    await dbSet(ref(db, key), value);
  },
};
