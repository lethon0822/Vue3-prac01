<script setup>
import Tire from '@/components/Tire.vue'
</script>

<template>
    <div class="front-wheel">
        <span>FRONT WHEEL</span>
        <Tire color="Red "/>
    </div>
</template>

<style scoped>
.front-wheel {
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