<template>
  
  <div class="flex flex-col bg-blue-200 w-full h-screen justify-between py-10 px-5">
    <div>
      <button class="bg-blue-300 p-2 rounded-md" @click="logOut">log out</button>
    </div>
    <div v-for="(msg,index) in messages" :key="index">
      <img :src="msg.userImage" alt="">
      <p> {{msg.text}} </p>
    </div>
    
    <form @submit.prevent="saveMessages" class="flex gap-3">
      <input v-model="message" class="p-2 bg-white rounded-md w-full" type="text" placeholder="type message">
      <button type="submit" :disabled="!message">
        <i class="fa-solid fa-paper-plane text-2xl text-cyan-400"></i>
      </button>
    </form>
  </div>
</template>
<script>
  import firebase from 'firebase/app'
  import "firebase/firestore";
  import "firebase/auth";

  export default {
    data() {
      return {
        db: firebase.firestore(),
        user: firebase.auth().currentUser,
        message: null,
        messages: []
      }
    },

    mounted() {
      this.db.collection('messages').orderBy('sendTime').onSnapshot(querrySnap => {
        this.messages = querrySnap.docs.map(doc => doc.data())
      })
    },

    methods: {
     async saveMessages() {
        const messageInfo = {
          userId: this.user.uid,
          displayName: this.user.displayName,
          userImage: this.user.photoURL,
          text: this.message,
          'sendTime': Date.now()
        }

      await this.db.collection('messages').add(messageInfo)
      this.message = null
        
      },

      logOut() {
        firebase.auth().signOut()
      }
    },
  }
</script>


