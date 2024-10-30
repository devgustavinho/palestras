<script setup lang="ts">
import { ref } from 'vue';
import { sleep } from '../../utils/async_utils';
import Avatar from "./Avatar.vue"

const { isBlockedFn, timeoutInSeconds, winner } = defineProps<{ 
    isBlockedFn: () => Promise<{ winner: { name: string ; attempts: string[]}, stillBlock: boolean }>; 
    timeoutInSeconds: number
    winner?: any
}>();

const isBlocked = ref(true);

while (isBlocked.value) {
    const value = await isBlockedFn();
    isBlocked.value = value.stillBlock;
    Object.assign(winner, value);
    await sleep(timeoutInSeconds);
}
</script>

<template>
    <div class="row" style="justify-content: space-evenly">
        <div>
            <b>Vencedor</b>
            <Avatar :name="winner.winner.winner.name" />
            <small>Acertou a fruta {{  winner.winner.winner_emoji  }}</small>
        </div>
        <div class="column">
            <span v-for="attempt in winner.attempts" class="row" style="align-items: baseline;">
                <Avatar :name="attempt.name" :width="50" text-size="10px"/>
                <small>Tentativas: {{ attempt.attempts.join(", ") }}</small>
            </span>
        </div>
    </div>
</template>


<style>
.center-div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>