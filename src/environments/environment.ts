// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const environment = {
  firebase: {
    projectId: 'miprimer-proyecto-2c587',
    appId: '1:298181692693:web:e1f9cd3c4f79645a97ed1c',
    storageBucket: 'miprimer-proyecto-2c587.appspot.com',
    apiKey: 'AIzaSyBph2xHPV209BA7Z2WrPzC64S2TqVl4HNc',
    authDomain: 'miprimer-proyecto-2c587.firebaseapp.com',
    messagingSenderId: '298181692693',
  },
  apiKey: "AIzaSyBph2xHPV209BA7Z2WrPzC64S2TqVl4HNc",
  authDomain: "miprimer-proyecto-2c587.firebaseapp.com",
  projectId: "miprimer-proyecto-2c587",
  storageBucket: "miprimer-proyecto-2c587.appspot.com",
  messagingSenderId: "298181692693",
  appId: "1:298181692693:web:e1f9cd3c4f79645a97ed1c"
};

// Initialize Firebase
const app = initializeApp(environment);