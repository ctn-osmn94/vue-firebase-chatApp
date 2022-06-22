import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import firebase from 'firebase/app'
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBW3dZ-_dmea24517e3bo1z_x2XOB8k6Yk",
    authDomain: "chat-93ce9.firebaseapp.com",
    databaseURL: "https://chat-93ce9-default-rtdb.firebaseio.com",
    projectId: "chat-93ce9",
    storageBucket: "chat-93ce9.appspot.com",
    messagingSenderId: "821909732809",
    appId: "1:821909732809:web:bffd6803eb7eddd4e4fc18",
    measurementId: "G-9PH9BFGLBG"
  };

    
  firebase.initializeApp(firebaseConfig)
  firebase.auth().onAuthStateChanged(() => {
    createApp(App).mount('#app');
  })
  
  
  