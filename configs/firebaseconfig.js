// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC0E3D1dXbol3gK4tI-qB9_lt4U8fbR-_s",
  authDomain: "travel-e57d3.firebaseapp.com",
  projectId: "travel-e57d3",
  storageBucket: "travel-e57d3.appspot.com",
  messagingSenderId: "321011873812",
  appId: "1:321011873812:web:2dba7b8cf70f618a390f01",
  measurementId: "G-X7Z7V6SDHC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
