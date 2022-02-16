// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFlSD8__6ABbel44HJnFz65m4TJwSdAr8",
  authDomain: "nuevos-rumbos.firebaseapp.com",
  projectId: "nuevos-rumbos",
  storageBucket: "nuevos-rumbos.appspot.com",
  messagingSenderId: "297766991112",
  appId: "1:297766991112:web:0f02b29933774fbf97a8bd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// obtenemos la autetenticacion
const auth = getAuth();
// obtnemos la db
const db = getFirestore();

export { auth, db };