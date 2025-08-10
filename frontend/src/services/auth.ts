// frontend/src/services/auth.ts
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";

export const signupWithEmail = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const loginWithSlack = async () => {
  const slackAuthUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/slack`; 
  window.location.href = slackAuthUrl; // redirect to backend Slack OAuth
};

export const loginWithSlackToken = async (customToken: string) => {
  await signInWithCustomToken(auth, customToken);
};

export const logout = () => signOut(auth);
