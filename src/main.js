import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

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
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);


  export {auth,database}
  
  createApp(App).mount('#app');
  