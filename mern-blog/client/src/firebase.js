// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e71cb.firebaseapp.com",
  projectId: "mern-blog-e71cb",
  storageBucket: "mern-blog-e71cb.appspot.com",
  messagingSenderId: "846936101442",
  appId: "1:846936101442:web:dbcec0949b279df4ce13db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);