// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXMW6ANPY38CxG_b1mmA4Ng9UGu-ZBG58",
  authDomain: "ghost-kitchen-bhilwara.firebaseapp.com",
  projectId: "ghost-kitchen-bhilwara",
  storageBucket: "ghost-kitchen-bhilwara.appspot.com",
  messagingSenderId: "672473481120",
  appId: "1:672473481120:web:b2f0dae44a04a38a0daec5",
  measurementId: "G-T2RX2MVT04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099")
