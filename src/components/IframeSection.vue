<script setup lang="ts">
import FloatingBlock from '../atoms/FloatingBlock.vue';
defineProps<{ iframeUrl: string }>()
</script>

<template>
    <section :data-background-iframe="iframeUrl">
        <FloatingBlock>
            <slot></slot>
        </FloatingBlock>
    </section>
</template>