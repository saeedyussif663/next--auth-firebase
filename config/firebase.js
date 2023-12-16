// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "auth-practice-c1693.firebaseapp.com",
  projectId: "auth-practice-c1693",
  storageBucket: "auth-practice-c1693.appspot.com",
  messagingSenderId: "116051422587",
  appId: "1:116051422587:web:c688f0789d2b1b030361de",
  measurementId: "G-MSSXNM0W3F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
