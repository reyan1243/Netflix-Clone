// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTuWilj7O3rer-EBXaD-cQFEawnla2dA",
  authDomain: "netflix-clone-react-a9802.firebaseapp.com",
  projectId: "netflix-clone-react-a9802",
  storageBucket: "netflix-clone-react-a9802.appspot.com",
  messagingSenderId: "24516614628",
  appId: "1:24516614628:web:12d7854c52bc3aa3ed0ff1",
  measurementId: "G-NJ9FWLLX0J"
};

// Initialize Firebase

const fireBaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(fireBaseApp)

export default firebaseAuth;