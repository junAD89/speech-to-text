// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYNJf1ZgLR0nP4bFoOI6Ktaju9gM32qlQ",
  authDomain: "test-fe90a.firebaseapp.com",
  projectId: "test-fe90a",
  storageBucket: "test-fe90a.firebasestorage.app",
  messagingSenderId: "282546096125",
  appId: "1:282546096125:web:78bc1ae7f45bcb3321fb94",
  measurementId: "G-0TZLN1SQNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };