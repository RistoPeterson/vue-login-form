/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBy7kk1h3oZ4Q7yAjWIZlp9HssDe34AA-4",
    authDomain: "vue-login-form-952ba.firebaseapp.com",
    projectId: "vue-login-form-952ba",
    storageBucket: "vue-login-form-952ba.appspot.com",
    messagingSenderId: "306164291285",
    appId: "1:306164291285:web:7a89efea0fd3db354d745c"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
