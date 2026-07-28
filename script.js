// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCqqcLtbu7lR3NgJrj18Ln-rPaLuBWuSxw",
  authDomain: "orbit-fca84.firebaseapp.com",
  projectId: "orbit-fca84",
  storageBucket: "orbit-fca84.firebasestorage.app",
  messagingSenderId: "489023886264",
  appId: "1:489023886264:web:736461c6018534e3f1354d",
  measurementId: "G-S5M77DHB89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
window.login = function () {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)

    .then(() => {

      alert("Login Successful");

      window.location.href = "https://YOUR_GOOGLE_SITES_URL";

    })

    .catch((error) => {

      alert(error.message);

    });

};
