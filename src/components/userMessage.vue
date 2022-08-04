<template>
    <div class="flex items-center p-2 rounded-lg gap-3" :class="currentSender ? 'flex-row-reverse':''">
        <imageUser class="w-12" :src="userPic"/>
        <div class="flex flex-wrap justify-end items-end p-3 gap-3 rounded-md " :class="currentSender ? 'bg-green-200' : 'bg-gray-100'" >
            <div class="break max-w-[250px]"><p class="text-lg"> {{text}} </p></div>
            <p> {{time}} </p>
        </div>
    </div>
</template>

<script>
import imageUser from './imageUser.vue'
export default {
    components: {
        imageUser
    },
    props: {
        currentSender: {
            type: Boolean,
            default: false
        },
        userPic: {
            type: String,
            default: ""
        },
        time:{
            type: String,
            default: ""
        },

        text: {
            type: String,
        }
    }
}
</script>

<style>
    .break {
        word-wrap: break-word;
    }
</style>