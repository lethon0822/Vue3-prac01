import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// 함수 주소값이 넘어옴
export const useCounterStore = defineStore('counter', () => {
  // 반응형 상태값, 여러 값을 줘야할 때 객체로
  const count = ref(0);
  // 컴퓨티드, count값 2배로
  const doubleCount = computed(() => count.value * 2);
  // 함수, count값을 올리는
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
