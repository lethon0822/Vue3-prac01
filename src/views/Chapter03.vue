<script setup>
import { ref } from 'vue';
const fruits = 'apple avocado';
const fruitArr = ['banana', 'bluberry'];
const visible = ref({ fruit: true });
const hidden = { fruit: false };
const changeVisible = () => {
  visible.value.fruit = !visible.value.fruit;
};
// 데이터가 많은데 문자열
const rect = 'background-color: red; width: 200px; height: 100px;';
const rectObj = {
  backgroundColor: 'red',
  width: '200px',
  height: '100px',
  marginTop: '10px',
};
rectObj.backgroundColor = 'green';

let loading = true;
</script>

<!-- vue는 태그에 직접 작성하는 문법이 보통임 -->
<template>
  <h1>Chapter03.vue</h1>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr" :title="FruitArr">바나나 / 블루베리</div>
  <hr />
  <div :class="visible" class="pointer" @click="changeVisible">
    사과 {{ visible.fruit }}
  </div>
  <div :class="hidden">오이</div>
  <div :style="rect">rect</div>
  <div :style="rectObj">rectObj</div>

  <!-- v-if는 자주 쓰일 수 있음 (ex. 로딩 화면) -->
  <!-- v-else를 쓴다면 v-if 바로 아래에 적어야 함 (다른 태그 없이)-->
  <!-- v-if의 내용에 태그가 들어가면 내용이 없는 걸로 보는 듯함 -->
  <div v-if="loading">
    <div>로딩 중!!</div>
  </div>
  <div v-else>로딩 끝!!</div>

  <!-- v-show: true일 때만 나타남 -->
  <div v-show="loading">show loading</div>

  <!-- if와 show의 차이점 : if는 아예 태그째로 사라지지만, 
                show는 display:none 처리되어 태그는 존재 -->
</template>

<style scoped>
.fruit {
  color: red;
}
</style>
