<script setup lang="ts">
import { ref } from 'vue';
import { slidesOptions } from './utils/presentationList';

const isSlideSelected = ref(false);
const selectedSlideIndex = ref(0);
const selectSlide = (index: number) => {
  selectedSlideIndex.value = index;
  isSlideSelected.value = true;
}
</script>

<template>
  <template v-if="!isSlideSelected">
    <section v-for="[index, slide] in slidesOptions.entries()" key="index">
      <h2>{{  slide.name }}</h2>
      <p> Ministrado em <b>{{ slide.formatedDate }}</b></p>
      <blockquote>{{ slide.description }}</blockquote>
      <button @click="selectSlide(index)">Apresentar slide</button>
    </section>
  </template>
  <template v-else>
    <section></section>
    <component :is="slidesOptions[selectedSlideIndex].type" />
  </template>
</template>

<style scoped>
</style>