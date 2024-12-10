import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js';

let firebaseConfig = {
    apiKey: "AIzaSyDSqbkrKnlwl21rtw1n_uhZN7lo-L1PHjA",
    authDomain: "blog-website-1906p.firebaseapp.com",
    projectId: "blog-website-1906p",
    storageBucket: "blog-website-1906p.firebasestorage.app",
    messagingSenderId: "192235444736",
    appId: "1:192235444736:web:28b1d6af10f30f3afc16e5"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

let db = getFirestore(app);
// const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);
export { db };

console.log(typeof firebase); // Should print "object" if Firebase is loaded