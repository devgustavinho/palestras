<script setup lang="ts">
import FinalSlide from './components/FinalSlide.vue';
import WhoAmI from './components/WhoAmI.vue';
</script>

<template>
  <section data-background="#6272a4">
    <WhoAmI :hasShadow="true"></WhoAmI>
  </section>
  <section data-background="#282a43">
    <FinalSlide></FinalSlide>
  </section>
</template>

<style scoped>
</style>