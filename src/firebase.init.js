// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT6_M1vb_NbytaOiOgq6RVzku10K_5UhI",
  authDomain: "perfumes-warhouse.firebaseapp.com",
  projectId: "perfumes-warhouse",
  storageBucket: "perfumes-warhouse.appspot.com",
  messagingSenderId: "93368570063",
  appId: "1:93368570063:web:8e39e758b9a1f89927e7ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
