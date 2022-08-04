<template>
    <div>
        <img class="rounded-full" :src="src" alt="">
    </div>
</template>

<script>
export default {
    props: { 
        src: { 
            type: String, 
            default: '' 
        } 
    }
}

</script>