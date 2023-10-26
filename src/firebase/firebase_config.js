// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChohsd-a1_WYM1XghwJ8JpSPDC25QxuEE",
  authDomain: "car-doctor-3e448.firebaseapp.com",
  projectId: "car-doctor-3e448",
  storageBucket: "car-doctor-3e448.appspot.com",
  messagingSenderId: "66510336540",
  appId: "1:66510336540:web:91a1dd51b930630c29e5d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
