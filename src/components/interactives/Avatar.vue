<script setup lang="ts">
import QuoteSomething from '../QuoteSomething.vue';

const { name, width, textSize } = defineProps<{ name: string, width?: number, textSize?: string }>();
const uri = "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=" + encodeURI(name);
</script>

<template>
    <QuoteSomething
        :imgSrc="uri"
        :name="name" 
        :titles="[]"
        :width="width"
        :text-size="textSize"
    />
</template>