// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaAZVsGNevQX6rgfjh3vC90GMcZNRu_ZU",
  authDomain: "auth-context-project-5a0aa.firebaseapp.com",
  projectId: "auth-context-project-5a0aa",
  storageBucket: "auth-context-project-5a0aa.appspot.com",
  messagingSenderId: "245965886403",
  appId: "1:245965886403:web:1625df6f96278decc22376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;