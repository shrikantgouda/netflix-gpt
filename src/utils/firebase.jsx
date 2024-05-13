// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmEHNQJA-bOyFrT1unXXdEhM3sbhcH5ek",
  authDomain: "netflix-gpt-402f9.firebaseapp.com",
  projectId: "netflix-gpt-402f9",
  storageBucket: "netflix-gpt-402f9.appspot.com",
  messagingSenderId: "679796649911",
  appId: "1:679796649911:web:6abe123c4dedfd250d4232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth()