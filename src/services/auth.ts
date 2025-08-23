// frontend/src/services/auth.ts
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import { getDoc, doc, setDoc, updateDoc, getFirestore} from 'firebase/firestore';
//import { useNavigate } from "react-router";

const db = getFirestore();

auth.onAuthStateChanged(async (user) => {
  //const navigate = useNavigate();
  console.log('user: ', user);
  if (user) {
    const uid = user.uid;
    const userRef = doc(db, 'users', uid);
    console.log('userRef: ', userRef);

    try {
      const userTest = await getDoc(userRef);
      if(!userTest.exists()) { //new user, create account with blank event arrays
        await setDoc(userRef, {
          email: user.email,
          satEvents: [],
          sunEvents: [],
        })
        console.log("User doc created for:", uid);
      } else {
        await updateDoc(userRef, { //user account already exists
          email: user.email
        });
      }
      //window.location.href = "/";
      //navigate('/');
    } catch (error) {
      console.error("Error creating user document:", error);
    }
  } else {
    console.log("No user signed in.");
  };
});

export const signupWithEmail = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password);
}
export const loginWithEmail = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
}

export const loginWithSlack = async () => {
  const slackAuthUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/slack`; 
  window.location.href = slackAuthUrl; // redirect to backend Slack OAuth
};

export const loginWithSlackToken = async (customToken: string) => {
  await signInWithCustomToken(auth, customToken);
};

export const logout = () => signOut(auth);
