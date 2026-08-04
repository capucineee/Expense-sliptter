// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMsa3BvIBTYDR0isLVvjAht1aTKPgz5JA",
  authDomain: "expense-splitter-54b84.firebaseapp.com",
  databaseURL: "https://expense-splitter-54b84-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expense-splitter-54b84",
  storageBucket: "expense-splitter-54b84.firebasestorage.app",
  messagingSenderId: "355873212971",
  appId: "1:355873212971:web:28b15a101c7e4a79c7386e",
  measurementId: "G-EY0SF94DPK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

// Sign in anonymously so the database rules can require auth != null
// without needing a login screen. Every visitor shares the same data.
export const authReady = signInAnonymously(auth);

// Analytics only works in browser environments that support it
isSupported().then((supported) => {
  if (supported) getAnalytics(app);
});
