// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxHtyQBksWUrjvo0-jnlSz5ttZ6YbORiQ",
  authDomain: "sfferex.firebaseapp.com",
  projectId: "sfferex",
  storageBucket: "sfferex.appspot.com",
  messagingSenderId: "445918363124",
  appId: "1:445918363124:web:46716355f6e4c0dbfe0da1",
  measurementId: "G-KEQ5RK5F6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);