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

// Login Function
window.login = async function () {

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("กรุณากรอก Email และ Password");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful!");

    window.location.href =
      "https://sites.google.com/view/gmrorbitcommunity/%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%81";

  } catch (error) {

    switch (error.code) {
      case "auth/invalid-email":
        alert("รูปแบบอีเมลไม่ถูกต้อง");
        break;

      case "auth/user-not-found":
      case "auth/invalid-credential":
        alert("ไม่พบอีเมลหรือรหัสผ่านไม่ถูกต้อง");
        break;

      case "auth/wrong-password":
        alert("รหัสผ่านไม่ถูกต้อง");
        break;

      default:
        alert(error.message);
    }

  }

};
