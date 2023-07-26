// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7jhFcug7JI2lSeJ4IFKy2ZHyRNAWZW8g",
  authDomain: "portfoliov2emp.firebaseapp.com",
  projectId: "portfoliov2emp",
  storageBucket: "portfoliov2emp.appspot.com",
  messagingSenderId: "184801054866",
  appId: "1:184801054866:web:02a5e75b85bb1b9bb3164b",
  measurementId: "G-JPVFC49HZT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const countEmCollection = collection(db, "countEm");
