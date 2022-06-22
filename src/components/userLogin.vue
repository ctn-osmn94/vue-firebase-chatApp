<template>
    <div >
        <h1 class="text-2xl font-bold">Login Page</h1>
        <button @click="Login" class="bg-blue-300 rounded-md p-2">Login With Google</button>
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
            .catch(console.log)
        }
    },
}
</script>