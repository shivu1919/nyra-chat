// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5VprveuZijF1QATodA97ConErqqfCENk",
  authDomain: "nyra-7f133.firebaseapp.com",
  projectId: "nyra-7f133",
  storageBucket: "nyra-7f133.firebasestorage.app",
  messagingSenderId: "815771903048",
  appId: "1:815771903048:web:5166aafbe6a66493e1e47d",
  measurementId: "G-LHG23M9V6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;