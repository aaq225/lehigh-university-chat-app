import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-d725a.firebaseapp.com",
  projectId: "reactchatapp-d725a",
  storageBucket: "reactchatapp-d725a.appspot.com",
  messagingSenderId: "151749759865",
  appId: "1:151749759865:web:baa23537a2a552c291d5a8",
  measurementId: "G-015EKNBCYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
