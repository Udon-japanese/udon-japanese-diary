// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZZxMargoHsBwv560IReqkzHeK4Tpz0fQ",
  authDomain: "udon-japanese-diary.firebaseapp.com",
  projectId: "udon-japanese-diary",
  storageBucket: "udon-japanese-diary.appspot.com",
  messagingSenderId: "1091306556188",
  appId: "1:1091306556188:web:a52115b33e7b0f625148d9",
  measurementId: "G-F0R85RV88N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ブラウザのみで動作させる
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}