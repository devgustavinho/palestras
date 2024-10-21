<template>
  <div class="flex">
    <div>
      <RoundedImg :has-shadow="true" :src="imgSrc ?? img" alt="Logo Gustavinho" />
    </div>
    <div>
      <div>
        <h3>Gustavo Carneiro</h3>
        <small>Gustavinho, para os chegados</small>
        <ul>
          <li>{{ years }}</li>
          <li class="fragment" v-for="presentation of presentations" :key="presentation" v-html="presentation"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type WhoAmIType = {
  imgSrc?: string;
  overridePresentations?: string[];
}

const { overridePresentations } = defineProps<WhoAmIType>()
import RoundedImg from '../atoms/RoundedImg.vue';
import { selectRandomItem } from '../utils/dates';
import { whatIDoMessages, yearsOldMessages } from '../utils/presentationMessages';
import { images } from '../utils/imagePicker';
import { computed } from 'vue';
const img = selectRandomItem<string>(images).selectedItem;
const years = selectRandomItem<string>(yearsOldMessages).selectedItem;

const presentations = computed(() => {
    if (overridePresentations) {
      return overridePresentations;
    }

    const randomPresentations: string[] = [];
    let presentationsLeft = structuredClone(whatIDoMessages);
    for (let i = 0; i < 3; i++) {
      const { selectedItem, itemsLeft } = selectRandomItem<string>(presentationsLeft);
      randomPresentations.push(selectedItem);
      presentationsLeft = itemsLeft;
    }

    return randomPresentations;
})
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.flex>div {
  display: flex;
  align-items: center;
}

.reveal b, .reveal strong {
  color: white!important;
}
</style>
