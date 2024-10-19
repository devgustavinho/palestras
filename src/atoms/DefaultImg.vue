<script setup lang="ts">
import { computed } from 'vue';

const { src, alt, hasShadow, width } = defineProps<{ src: string; alt: string, hasShadow?: boolean, width?: number }>();

const divStyle = computed(() => {
  return {
    width: `${width ?? 150}px`
  }
});
</script>

<template>
  <div :class="['image']">
    <img :class="{ 'image--with-shadow-bottom': hasShadow }" :srcSet="src" :alt="alt" />
  </div>
</template>

<style scoped>
.image {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind('divStyle.width');
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image--with-shadow-bottom {
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
}
</style>