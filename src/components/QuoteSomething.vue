<template>
    <a :href="href" target="_blank">
      <div class="flex">
          <RoundedImg v-if="!isSquared" :src="imgSrc" :width="width" :alt="name" />
          <DefaultImg v-else :src="imgSrc" :width="width" :alt="name"/>
          <span><b>{{ name }}</b></span>
          <small v-for="[index, title] of titles.entries()">
              <span v-if="index == 0"><b>{{ title }}</b></span>
              <span v-else>{{ title }}</span>
          </small>
      </div>
    </a>
  </template>
  
  <script setup lang="ts">
import DefaultImg from '../atoms/DefaultImg.vue';
import RoundedImg from '../atoms/RoundedImg.vue';

  type QuoteType = {
    imgSrc: string;
    name: string;
    titles: string[];
    href?: string;
    isSquared?: boolean;
    width?: number;
  }
  
  defineProps<QuoteType>()
  </script>
  
  <style scoped>
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  