<template>
  <div class="w-full h-screen flex flex-col">
    <div class="flex justify-between items-center bg-slate-200 py-3 px-5">
      <div class="flex gap-3 items-center">
        <img class="w-12 rounded-full" :src="user.photoURL" alt="">
        <p class="text-lg">{{user.displayName}}</p>
      </div>
      <i class="fa-solid fa-right-from-bracket text-2xl text-blue-400" @click="logOut"></i>
    </div>

    <div class="flex flex-col bg-blue-200 gap-5 justify-between w-full h-screen py-6 px-5 overflow-y-auto">
      <div class="flex flex-col gap-4">
        
        <user-message 
          @click="deleteItem"
          v-for="(msg,index) in messages" :key="index"
          :currentSender="msg.userId === user?.uid"
          :userPic="msg.userImage"
          :time="msg.sendTime"
          :text="msg.text">
          
        </user-message>
      </div>
      
      <form @submit.prevent="sendMessages" class="flex gap-3 mt-5">
        <textarea v-model="message" class="p-3 bg-white rounded-lg w-full" type="text" placeholder="type message"></textarea>
        <button type="submit" :disabled="!message">
          <i class="fa-solid fa-paper-plane text-2xl text-blue-500"></i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
  import userMessage from './userMessage.vue'
  import firebase from 'firebase/app'
  import "firebase/firestore";
  import "firebase/auth";

  export default {
    components: {
      userMessage
    },
    data() {
        return {
            show:false,
            db: firebase.firestore(),
            user: firebase.auth().currentUser,
            message: null,
            messages: []
        };
    },
    mounted() {
        this.db.collection("messages").orderBy('createdAt', 'desc').onSnapshot(querrySnap => {
            this.messages = querrySnap.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .reverse()
        });
    },
    methods: {
        async sendMessages() {
            const currentDate = new Date();
            const messageInfo = {
                userId: this.user.uid,
                displayName: this.user.displayName,
                userImage: this.user.photoURL,
                text: this.message,
                sendTime: currentDate.getHours() + ":" + currentDate.getMinutes(),
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            await this.db.collection("messages").add(messageInfo);
            this.message = null;
        },
        logOut() {
            firebase.auth().signOut();
        },
        deleteItem() {
          this.db.collection("messages").onSnapshot(querrySnap=>{
            querrySnap.docs.map(doc=>doc.ref.delete())
          })
        },
        showMembers() {

        }
    },
   
}
</script>


