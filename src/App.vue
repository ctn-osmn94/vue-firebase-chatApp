<script>
import privateMessage from './components/privateMessage.vue'
import userLogin from './components/userLogin.vue'
import firebase from 'firebase/app'
import "firebase/auth";
export default {
  components: {
    privateMessage,
    userLogin
  },

 
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },


}
</script>

<template>
  <div id="app">
    <private-message v-if="user"></private-message>
    <user-login v-else></user-login>
  </div>
</template>
