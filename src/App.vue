<script setup lang="ts">
import { computed, ref, DefineComponent } from 'vue';
import { slidesOptions } from './utils/presentationList';

const routes: Record<`/${string}`, DefineComponent<any,any,any>> = {};

for (const slide of slidesOptions) {
  routes[slide.route] = slide.component;
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  const route = (currentPath.value.slice(1) || '/') as `/${string}`;
  return routes[route] ?? undefined
})
</script>

<template>
  <section v-if="!currentView">
    <section v-for="[index, slide] in slidesOptions.entries()" :key="index">
      <div>
        <div>
            <h2>{{  slide.name }}</h2>
            <p> Ministrado em <b>{{ slide.formatedDate }}</b></p>
            <blockquote>{{ slide.description }}</blockquote>
          <a  :href="`#${slide.route}`" target="_blank">Acessar</a>
        </div>
        <div>
          <iframe :src="`#${slide.route}`" frameborder="5"></iframe>
        </div>
      </div>
    </section>
  </section>
  <component :is="currentView" />
</template>

<style scoped>
</style>