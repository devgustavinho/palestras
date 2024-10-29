<script setup lang="ts">
import { StyleValue } from 'vue';

let { styleOptions } = defineProps<{ carbonUrl: string, styleOptions?: StyleValue }>();

const style = {
    width: "875px", 
    height: "391px", 
    border:0,
    transform: "scale(1)",
    overflow: "hidden",
}
if (styleOptions) {
    Object.assign(style, styleOptions)
}

</script>
<template>
    <iframe :src="carbonUrl"  :style="style" sandbox="allow-scripts allow-same-origin">
</iframe>
</template>