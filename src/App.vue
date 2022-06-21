<script>
import privateMessage from './components/privateMessage.vue'
import userLogin from './components/userLogin.vue'
export default {
  components: {
    privateMessage,
    userLogin
  }

}
</script>

<template>
  <div>
    <user-login></user-login>
    <private-message></private-message>
  </div>
</template>
