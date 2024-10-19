<template>
    <div class="center-div">
        <h2>{{ title }}</h2>
        <p v-if="subtitle" class="fragment">{{ subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>();
</script>

<style>
.center-div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>