<template>
  <div class="flex flex-col bg-blue-200 w-full h-screen justify-between py-10 px-5">
    <p class="rounded-md bg-white"> {{message}} </p>
    <div class="flex items-center gap-3">
      <input v-model="message" class="p-2 bg-white rounded-md w-full" type="text" placeholder="Message...">
      <i @click="saveMessages" class="fa-solid fa-paper-plane text-2xl text-cyan-400"></i>
    </div>
  </div>
</template>
<script>
  export default {
    
    data() {
      return {
        message: null
      }
    },

    methods: {
      saveMessages() {
        console.log("dasd");
      }
    },
  }
</script>


