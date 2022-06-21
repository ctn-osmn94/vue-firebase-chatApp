<script>
import privateMessage from './components/privateMessage.vue'
import userLogin from './components/userLogin.vue'
import { getAuth } from "firebase/auth";
export default {
  components: {
    privateMessage,
    userLogin
  },

  data() {
    return {
      auth: getAuth(),
      user: null
    }
  },
 

}
</script>

<template>
  <div>
    <private-message v-if="user == auth.currentUser"></private-message>
    <user-login v-else></user-login>
  </div>
</template>
