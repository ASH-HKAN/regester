import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app";


// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyALR1fC8GtEbamoG5bKQ-dMx1sIwJjj8FA",
  authDomain: "fir-project-b6e74.firebaseapp.com",
  projectId: "fir-project-b6e74",
  storageBucket: "fir-project-b6e74.appspot.com",
  messagingSenderId: "635076824259",
  appId: "1:635076824259:web:9ac3685a9e2c20118fa676"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).mount('#app')
