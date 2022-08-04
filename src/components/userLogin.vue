<template>
    <div class="text-center flex flex-col gap-10 bg-blue-300 text-white p-5 justify-center w-full h-screen">
        <h1 class="text-4xl font-bold">Login Page</h1>
        <i class="fa-solid fa-users text-4xl "></i>
        <button @click="Login" class="bg-green-300 rounded-md p-4 text-xl">Login With Google</button>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth";
export default {
    methods: {
        Login() {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithRedirect(provider)
        }
    },
}
</script>