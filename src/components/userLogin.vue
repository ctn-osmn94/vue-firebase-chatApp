<template>
    <div >
        <h1 class="text-2xl font-bold">Login Page</h1>
        <button @click="Login" class="bg-blue-300 rounded-md p-2">Login With Google</button>
    </div>
</template>

<script>
import { GoogleAuthProvider,getAuth, signInWithRedirect  } from "firebase/auth";
export default {
    methods: {
        Login() {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithRedirect(auth, provider);
        }
    },
}
</script>