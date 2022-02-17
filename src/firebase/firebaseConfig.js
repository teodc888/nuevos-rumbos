// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKkUJWQuo7jKdvmNVCpPTizPyj2DQJrM",
  authDomain: "nuevos-rumbos-a8c65.firebaseapp.com",
  projectId: "nuevos-rumbos-a8c65",
  storageBucket: "nuevos-rumbos-a8c65.appspot.com",
  messagingSenderId: "789695575238",
  appId: "1:789695575238:web:c4ed101a865e2c52e013c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// obtenemos la autetenticacion
// const auth = getAuth();
// obtnemos la db
const db = getFirestore(app);

export default db