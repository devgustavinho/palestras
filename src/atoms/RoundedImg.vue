<script setup lang="ts">
const { src, alt, hasShadow, width } = defineProps<{ src: string; alt: string, hasShadow?: boolean, width?: number }>()
</script>

<template>
  <div class="round-image" :style="{ width: `${width ?? 150}px` }">
    <img :class="{ 'shadow-bottom': hasShadow }" :srcSet="src" :alt="alt" />
  </div>
</template>

<style scoped>
.round-image {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.round-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.shadow-bottom {
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
}
</style>