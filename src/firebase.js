// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4DuVwntA29zC6HWrPVcstcwX-_xdz1R0",
  authDomain: "my-dictionary-89240.firebaseapp.com",
  projectId: "my-dictionary-89240",
  storageBucket: "my-dictionary-89240.appspot.com",
  messagingSenderId: "402658791",
  appId: "1:402658791:web:9a97ef0492917192f35942",
  measurementId: "G-HMYH47NHQQ"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();