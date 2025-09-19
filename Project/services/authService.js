import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const registerUser = async (email, password) => {
  if (!auth) throw new Error('Auth not initialized');
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email, password) => {
  if (!auth) throw new Error('Auth not initialized');
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  if (!auth) throw new Error('Auth not initialized');
  return await signOut(auth);
};