<template>
  <div class="flex">
    <div>
      <RoundedImg :has-shadow="hasShadow" :src="img" alt="Logo Gustavinho" />
    </div>
    <div>
      <div>
        <h3>Gustavo Carneiro</h3>
        <small>Gustavinho, para os chegados</small>
        <ul>
          <li>{{ years }}</li>
          <li v-for="presentation of presentations">{{ presentation }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ hasShadow?: boolean }>()
import RoundedImg from '../atoms/RoundedImg.vue';
import { selectRandomItem } from '../utils/dates';
import { whatIDoMessages, yearsOldMessages } from '../utils/presentationMessages';
import { images } from '../utils/imagePicker';

const img = selectRandomItem<string>(images).selectedItem;
const years = selectRandomItem<string>(yearsOldMessages).selectedItem;

const presentations: string[] = [];
let presentationsLeft = structuredClone(whatIDoMessages);
for (let i = 0; i < 3; i++) {
  const { selectedItem, itemsLeft } = selectRandomItem<string>(presentationsLeft);
  presentations.push(selectedItem);
  presentationsLeft = itemsLeft;
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
}

.flex>div {
  display: flex;
  align-items: center;

}
</style>
