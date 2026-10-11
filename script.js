
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// =================== FIREBASE CONFIG ===================
const firebaseConfig = {
  apiKey: "AIzaSyCqqcLtbu7lR3NgJrj18Ln-rPaLuBWuSxw",
  authDomain: "orbit-fca84.firebaseapp.com",
  projectId: "orbit-fca84",
  storageBucket: "orbit-fca84.firebasestorage.app",
  messagingSenderId: "489023886264",
  appId: "1:489023886264:web:736461c6018534e3f1354d",
  measurementId: "G-S5M77DHB89"
};

// =================== INITIALIZE FIREBASE ===================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// =================== ORBIT WEBSITE URL ===================
const ORBIT_URL = "https://sites.google.com/view/gmrorbitcommunity/home";

// =================== LOGIN ===================
window.login = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("กรุณากรอก Email และ Password");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful! Redirecting to ORBIT...");

    window.location.replace(ORBIT_URL);

  } catch (error) {
    console.error("Login error:", error.code, error.message);

    switch (error.code) {
      case "auth/invalid-email":
        alert("รูปแบบอีเมลไม่ถูกต้อง");
        break;

      case "auth/user-not-found":
      case "auth/invalid-credential":
      case "auth/wrong-password":
        alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        break;

      case "auth/too-many-requests":
        alert("มีการลองเข้าสู่ระบบหลายครั้งเกินไป กรุณารอสักครู่");
        break;

      case "auth/network-request-failed":
        alert("เชื่อมต่ออินเทอร์เน็ตไม่สำเร็จ กรุณาลองใหม่");
        break;

      default:
        alert("เข้าสู่ระบบไม่สำเร็จ: " + error.message);
    }
  }
};

// =================== REGISTER ===================
window.register = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("กรุณากรอก Email และ Password");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);

    alert("สร้างบัญชี ORBIT สำเร็จ! ตอนนี้สามารถเข้าสู่ระบบได้แล้ว");

  } catch (error) {
    console.error("Register error:", error.code, error.message);

    switch (error.code) {
      case "auth/email-already-in-use":
        alert("อีเมลนี้ถูกใช้งานแล้ว");
        break;

      case "auth/weak-password":
        alert("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
        break;

      case "auth/invalid-email":
        alert("รูปแบบอีเมลไม่ถูกต้อง");
        break;

      case "auth/network-request-failed":
        alert("เชื่อมต่ออินเทอร์เน็ตไม่สำเร็จ กรุณาลองใหม่");
        break;

      default:
        alert("สร้างบัญชีไม่สำเร็จ: " + error.message);
    }
  }
};
