// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4WLTpIvusFHDwoCabDXO_1TSuorNuMtU",
  authDomain: "simee-treat.firebaseapp.com",
  projectId: "simee-treat",
  storageBucket: "simee-treat.appspot.com",
  messagingSenderId: "428236238890",
  appId: "1:428236238890:web:7b6213f99015879ddc9353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
