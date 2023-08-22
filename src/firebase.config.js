// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIbc4oli0ytSJB4BoULP8QgBMfGQ7qpCs",
  authDomain: "rent-it-f8782.firebaseapp.com",
  projectId: "rent-it-f8782",
  storageBucket: "rent-it-f8782.appspot.com",
  messagingSenderId: "836225800184",
  appId: "1:836225800184:web:276334341458c7c353a80d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
