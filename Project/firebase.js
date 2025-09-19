import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDE08nQi6cYw3ilJElvUfZZlB8mTtICrcg",
  authDomain: "medmind-df71c.firebaseapp.com",
  projectId: "medmind-df71c",
  storageBucket: "medmind-df71c.firebasestorage.app",
  messagingSenderId: "289781003763",
  appId: "1:289781003763:web:9335c65697f797e9178e86"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);