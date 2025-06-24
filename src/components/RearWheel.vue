<script setup>
import Tire from '@/components/Tire.vue'
import { useCounterStore } from '@/stores/counter.js';
const counterStore = useCounterStore();
</script>

<template>
    <div class="rear-wheel">
        <span>REAR WHEEL</span>
        <Tire color="Green"/>
        <div>TIMES: {{ counterStore.count }}</div>
    </div>
</template>

<style scoped>
.rear-wheel {
    border: 1px solid black;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>