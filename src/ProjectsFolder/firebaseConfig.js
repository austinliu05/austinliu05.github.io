// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase} from 'firebase/database';
import 'firebase/database'; // If using Realtime Database

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxosZpnor6IqG5K79acJlQ40_luzy-ibs",
  authDomain: "website-84a2e.firebaseapp.com",
  projectId: "website-84a2e",
  storageBucket: "website-84a2e.appspot.com",
  messagingSenderId: "813261542512",
  appId: "1:813261542512:web:26c3a7f0d37394e96f50b5",
  measurementId: "G-Y3F61TNPWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, database };
