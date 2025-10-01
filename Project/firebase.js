import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE08nQi6cYw3ilJElvUfZZlB8mTtICrcg",
  authDomain: "medmind-df71c.firebaseapp.com",
  projectId: "medmind-df71c",
  storageBucket: "medmind-df71c.firebasestorage.app",
  messagingSenderId: "289781003763",
  appId: "1:289781003763:web:9335c65697f797e9178e86",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
};
