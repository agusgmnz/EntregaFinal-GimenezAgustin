import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARyXH1ANT6juaywbQVKEvGa7BVJLt58YY",
  authDomain: "react-entregafinal.firebaseapp.com",
  projectId: "react-entregafinal",
  storageBucket: "react-entregafinal.appspot.com",
  messagingSenderId: "494731404336",
  appId: "1:494731404336:web:186ecf8cc1ea4c685079f5",
  measurementId: "G-3CK8YRSGD7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)