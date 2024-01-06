// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3f410.firebaseapp.com",
  projectId: "mern-estate-3f410",
  storageBucket: "mern-estate-3f410.appspot.com",
  messagingSenderId: "69659352990",
  appId: "1:69659352990:web:288d772b6dc1e54d5c808f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
