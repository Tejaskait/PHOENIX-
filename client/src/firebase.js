// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY  ,
  authDomain: "phoenix-b760d.firebaseapp.com",
  projectId: "phoenix-b760d",
  storageBucket: "phoenix-b760d.firebasestorage.app",
  messagingSenderId: "549358058131",
  appId: "1:549358058131:web:29d504edfb3de4660eeb66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);