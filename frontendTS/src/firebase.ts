// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvktykSyBXQ-0taKOgUh0SnVzazuuAuTk",
  authDomain: "socialmedia-6381a.firebaseapp.com",
  projectId: "socialmedia-6381a",
  storageBucket: "socialmedia-6381a.firebasestorage.app",
  messagingSenderId: "153141825304",
  appId: "1:153141825304:web:7f917a1534434dbee3d86d",
  measurementId: "G-CH2CD81MW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
