// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,

} = getEnvironments();


// PROD
// const firebaseConfig = {
//   apiKey: "AIzaSyBTFnuIT9Rks3g-HekH5S8TBCWuN99GMzY",
//   authDomain: "react-curso-60d06.firebaseapp.com",
//   projectId: "react-curso-60d06",
//   storageBucket: "react-curso-60d06.firebasestorage.app",
//   messagingSenderId: "712633209698",
//   appId: "1:712633209698:web:990ce1ceb4623fd07b923b"
// };

// TESTING
// const firebaseConfig = {
//   apiKey: "AIzaSyAV1Oadn-N-dUtGZjFYlVnUK51MfokM38w",
//   authDomain: "react-testing-7e462.firebaseapp.com",
//   projectId: "react-testing-7e462",
//   storageBucket: "react-testing-7e462.firebasestorage.app",
//   messagingSenderId: "274354547522",
//   appId: "1:274354547522:web:ad32e25a7517b0cfd1f6db"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

console.log( firebaseConfig );

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
