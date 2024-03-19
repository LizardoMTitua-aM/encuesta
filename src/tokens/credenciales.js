// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3rhEJlhvSyGU4Pi9OfCkbMaJx_E-r0rY",
  authDomain: "mi-encuesta-2039f.firebaseapp.com",
  projectId: "mi-encuesta-2039f",
  storageBucket: "mi-encuesta-2039f.appspot.com",
  messagingSenderId: "913541093913",
  appId: "1:913541093913:web:e9549532d80be64fcaa888"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;