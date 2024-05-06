import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useHref } from 'react-router-dom';

import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBc9a4eN9dfXp3c35vNYZOjlu8LxyPNvC0",
  authDomain: "ecommerce-reactjs-6e185.firebaseapp.com",
  projectId: "ecommerce-reactjs-6e185",
  storageBucket: "ecommerce-reactjs-6e185.appspot.com",
  messagingSenderId: "74615964644",
  appId: "1:74615964644:web:760d8ba0653b582c3b3df1"
};

initializeApp(firebaseConfig);

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

