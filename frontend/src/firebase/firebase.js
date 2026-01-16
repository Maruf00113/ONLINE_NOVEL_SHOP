// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyD-fcHkQ5iqCVGjHX7nBZz4fI6be3hAVk4",

  authDomain: "test-project-blog-85b5d.firebaseapp.com",

  projectId: "test-project-blog-85b5d",

  storageBucket: "test-project-blog-85b5d.firebasestorage.app",

  messagingSenderId: "136343278692",

  appId: "1:136343278692:web:d18833ff002e1db2d47b71",

  measurementId: "G-SBS55XSY6Q"

};


 

// Initialize Firebase 
const app = initializeApp(firebaseConfig); 

export const auth = getAuth();
export default app;