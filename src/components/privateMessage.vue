<template>
  <div>
    <h1 class="text-xl font-bold">chat app</h1>
    <button class="bg-blue-300 p-2 rounded-md" @click="logOut">log out</button>
  </div>
  <div class="flex flex-col bg-blue-200 w-full h-screen justify-between py-10 px-5">
    <p class="rounded-md bg-white"> {{message}} </p>
    <div class="flex items-center gap-3">
      <input v-model="message" class="p-2 bg-white rounded-md w-full" type="text" placeholder="Message...">
      <i @click="saveMessages" class="fa-solid fa-paper-plane text-2xl text-cyan-400"></i>
    </div>
  </div>
</template>
<script>
  import { getAuth } from "firebase/auth";
  export default {
    
    data() {
      return {
        message: null
      }
    },

    methods: {
      saveMessages() {
        console.log("dasd");
      },

      logOut() {
        getAuth().signOut()
      }
    },
  }
</script>


