import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";


import 'bootstrap/dist/css/bootstrap.min.css';








const firebaseConfig = {
  apiKey: "AIzaSyDK4iQDX8LslykWF5lJ4ByKfyU5Op5L4xE",
  authDomain: "fixamed-4b7e7.firebaseapp.com",
  projectId: "fixamed-4b7e7",
  storageBucket: "fixamed-4b7e7.appspot.com",
  messagingSenderId: "653347712868",
  appId: "1:653347712868:web:bce20f1d17141ee750d471"
};


const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
