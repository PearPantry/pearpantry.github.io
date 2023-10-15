// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_vyISq2tAZMDk3VoBzzgXgol3zd0jy9g",
  authDomain: "pear-pantry.firebaseapp.com",
  projectId: "pear-pantry",
  storageBucket: "pear-pantry.appspot.com",
  messagingSenderId: "1060935091915",
  appId: "1:1060935091915:web:0648ae69309922db92bd4e",
  measurementId: "G-28BEHX0HSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);