<template>
    Obrigado :D
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { sleep } from '../../utils/async_utils';

const { isBlockedFn, timeoutInSeconds } = defineProps<{ 
    isBlockedFn: () => Promise<{ items: any[], stillBlock: boolean }>; 
    timeoutInSeconds: number 
}>();

const isBlocked = ref(true);
const items = ref<any[]>([]);

while (isBlocked.value) {
    const value = await isBlockedFn();
    isBlocked.value = value.stillBlock;
    items.value = value.items;
    await sleep(timeoutInSeconds);
}

</script>

<style>
.center-div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>