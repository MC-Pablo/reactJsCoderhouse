import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIVHnDH1Jo0y8tGoN78K-AeRyiJQX9E7k",
  authDomain: "ivimontetattoo-5d059.firebaseapp.com",
  projectId: "ivimontetattoo-5d059",
  storageBucket: "ivimontetattoo-5d059.appspot.com",
  messagingSenderId: "197202730518",
  appId: "1:197202730518:web:6ba7f0aeefbe0891c91f37"
};

initializeApp(firebaseConfig);
export const dataBase= getFirestore (App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

