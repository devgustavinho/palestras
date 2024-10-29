<script setup>
import { ref } from 'vue';
    const isMinized = ref(false);
    const toggleMinimize = () => {
        console.log("toggling")
        isMinized.value = !isMinized.value
    }
</script>
<template>
    <div v-if="!isMinized"  @dblclick="toggleMinimize" style="position: absolute; width: 50%; right: 0px; bottom: -500px; box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px, rgba(0, 0, 0, 0.2) 0px 5px 25px; background-color: rgba(0, 0, 0, 0.9); color: rgb(255, 255, 255); padding: 20px; text-align: left;">
        <slot></slot>
    </div>
    <div v-else class="minimized"  @dblclick="toggleMinimize" style="position: absolute; width: 50%; right: 0px; bottom: -500px; box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px, rgba(0, 0, 0, 0.2) 0px 5px 25px; background-color: rgba(0, 0, 0, 0.9); color: rgb(255, 255, 255); padding: 20px; text-align: left;">
        <h6>Restaurar</h6>
    </div>
</template>
<style>
.minimized {
  max-height: 10px;
  overflow: hidden;
}
</style>