// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTFnuIT9Rks3g-HekH5S8TBCWuN99GMzY",
  authDomain: "react-curso-60d06.firebaseapp.com",
  projectId: "react-curso-60d06",
  storageBucket: "react-curso-60d06.firebasestorage.app",
  messagingSenderId: "712633209698",
  appId: "1:712633209698:web:990ce1ceb4623fd07b923b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
