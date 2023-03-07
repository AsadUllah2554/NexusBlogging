// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-1CGt4xzWuUh_C-ei2Cig83RYdN5rQUg",
  authDomain: "nexusblog-65b3d.firebaseapp.com",
  projectId: "nexusblog-65b3d",
  storageBucket: "nexusblog-65b3d.appspot.com",
  messagingSenderId: "474861982550",
  appId: "1:474861982550:web:e8407820b29f63005cbcf7",
  measurementId: "G-S3W9W0PMVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

