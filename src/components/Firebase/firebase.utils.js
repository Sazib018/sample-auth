// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKZoj3-PWR1fW_j2WLi7LyAK7Pacuu1bA",
  authDomain: "sample-auth-d85d7.firebaseapp.com",
  projectId: "sample-auth-d85d7",
  storageBucket: "sample-auth-d85d7.firebasestorage.app",
  messagingSenderId: "620304842930",
  appId: "1:620304842930:web:5ea7322506d0f626a7c9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;