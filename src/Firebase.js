import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_wo5m9P1XlZwL5U6zm0d8_N9cY86wDWM",
    authDomain: "internship-1dd17.firebaseapp.com",
    projectId: "internship-1dd17",
    storageBucket: "internship-1dd17.appspot.com",
    messagingSenderId: "229055936561",
    appId: "1:229055936561:web:1cc44cc01ee5443ef13d10"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

