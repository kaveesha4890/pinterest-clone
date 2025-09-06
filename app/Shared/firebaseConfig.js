// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAINV-Ol3tiwvNURZ4a34GO5crd6JHPCNs",
  authDomain: "pinterest-c38cc.firebaseapp.com",
  projectId: "pinterest-c38cc",
  storageBucket: "pinterest-c38cc.firebasestorage.app",
  messagingSenderId: "1037595902923",
  appId: "1:1037595902923:web:be89d8459e5a82ee042c4e",
  measurementId: "G-72JJ0LNDR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app