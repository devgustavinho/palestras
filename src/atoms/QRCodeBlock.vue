<template>
    <div>
        <a :href="url" target="_blank">
            <p>Link para jogar</p>
            <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=1000&data=${encodeURI(url)}`" alt="qrcode">
        </a>
    </div>
</template>

<script setup lang="ts">
defineProps<{ url: string }>();
</script>