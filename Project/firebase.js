// Mock Firebase functions for now
export const auth = null;
export const db = null;

export const signInWithEmailAndPassword = async (auth, email, password) => {
  return Promise.resolve({ user: { email } });
};

export const createUserWithEmailAndPassword = async (auth, email, password) => {
  return Promise.resolve({ user: { email } });
};