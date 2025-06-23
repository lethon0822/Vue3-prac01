<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
import { useCounterStore } from '@/stores/counter.js';
const counterStore = useCounterStore();
</script>

<template>
  <h1>Component.vue</h1>
  <h1>Hello Vue!</h1>
  <button @click="counterStore.increment">회전</button>
  <div class="wide">
    <FrontWheel />
    <FrontWheel />
  </div>
  <div class="wide">
    <RearWheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.wide {
  display: flex;
}
</style>

<!-- 컴포넌트 : 애플리케이션을 구성하는 재사용 가능한 요소
               데이터를 넣기만 하면 계속 만들어내는 템플릿같은 느낌
               가장 상위 컴포넌트가 App.vue이고 자식 컴포넌트를 사용 -->
