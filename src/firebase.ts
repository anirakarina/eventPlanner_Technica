import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID
  apiKey: "AIzaSyC7lAPq5O2_PolTc510vlFsZpFcmxjCHLk",
  authDomain: "eventtechnica-bfa3b.firebaseapp.com",
  projectId: "eventtechnica-bfa3b",
  storageBucket: "eventtechnica-bfa3b.firebasestorage.app",
  messagingSenderId: "472815901107",
  appId: "1:472815901107:web:4b66bba31c6298b65fd3c6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // for Slack, will use OAuth redirect to backend
