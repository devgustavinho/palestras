<template>
    <div class="center-div">
        <h1>OBRIGADO!</h1>
        <RoundedImg :has-shadow="hasShadow" :src="defaultLogo" :width="350" alt="Logo Gustavinho" />
        <h3>Dúvidas? Reclamações?</h3>
        <small>Ameaças?</small>
    </div>
</template>

<script setup lang="ts">
defineProps<{ hasShadow?: boolean }>();
import RoundedImg from '../atoms/RoundedImg.vue';
import { defaultLogo } from '../utils/imagePicker';

</script>

<style>
.center-div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>