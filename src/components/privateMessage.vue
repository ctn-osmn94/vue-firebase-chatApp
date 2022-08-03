<template>
  
  <div class="flex flex-col bg-blue-200 gap-5 w-full h-screen justify-between py-10 px-5 overflow-y-auto">
    <div class="flex flex-col gap-4">
      <div>
        <button class="bg-blue-300 p-2 rounded-md" @click="logOut">log out</button>
      </div>
      <div v-for="(msg,index) in messages" :key="index" class="flex justify-between items-center bg-white p-2 rounded-lg ">
        <img class="w-10 rounded-full" :src="msg.userImage" alt="">
        <p class="text-lg"> {{msg.text}} </p>
        <p> {{msg['sendTime']}} </p>
      </div>
    </div>
    
    <form @submit.prevent="sendMessages" class="flex gap-3 mt-5">
      <textarea v-model="message" class="p-3 bg-white rounded-lg w-full" type="text" placeholder="type message"></textarea>
      <button type="submit" :disabled="!message">
        <i class="fa-solid fa-paper-plane text-2xl text-blue-500"></i>
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
     async sendMessages() {
        const currentDate = new Date()
        const messageInfo = {
          userId: this.user.uid,
          displayName: this.user.displayName,
          userImage: this.user.photoURL,
          text: this.message,
          'sendTime': currentDate.getHours() + ':' + currentDate.getMinutes()
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


