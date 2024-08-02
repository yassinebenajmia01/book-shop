import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApiProvider } from './context/apiContext';
import { AuthProvider } from './context/authContext';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADF35okufyh43sx0gm5rec4FtFx5w84Nc",
  authDomain: "first-app-d18e9.firebaseapp.com",
  projectId: "first-app-d18e9",
  storageBucket: "first-app-d18e9.appspot.com",
  messagingSenderId: "136057433396",
  appId: "1:136057433396:web:76640040badc7a3e7f8961",
  measurementId: "G-REHE2WGBZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <ApiProvider>
    <App />
    </ApiProvider>
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

