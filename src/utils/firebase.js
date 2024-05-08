// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq6-tfzFxsyledL7Kj983twLUpZQg5ow8",
  authDomain: "fboxgpt.firebaseapp.com",
  projectId: "fboxgpt",
  storageBucket: "fboxgpt.appspot.com",
  messagingSenderId: "534901765793",
  appId: "1:534901765793:web:8a09df0c200c0204a322e0",
  measurementId: "G-5HFS2WXM5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();