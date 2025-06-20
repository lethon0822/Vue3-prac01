<script setup>
const fruits = ['apple', 'banana', 'pear'];
const sports = [
  { id: 1, name: '농구' },
  { id: 2, name: '축구' },
  { id: 3, name: '배구' },
];
// 함수 등록
const pop = message => alert(message);
const pop2 = () => alert('파라미터 없음');
</script>

<template>
  <h1>Chapter04.vue</h1>
  <div v-for="(item, idx) in fruits" key="idx">
    {{ idx + 1 + '. ' + item }}
    <!-- 이렇게 하는 게 보통인듯 -->
    <!-- {{ idx + 1 }} {{ item }} -->
  </div>
  <select>
    <!-- 객체에 유일값이 있으면 key값에 넣으면 됨(배열은 index로 한 것) -->
    <option v-for="item in sports" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
  </select>

  <select>
    <option value="1">농구</option>
    <option value="2">축구</option>
    <option value="3">배구</option>
  </select>
<!-- v-on을 @으로 줄이는 편 -->
  <button @:click="pop('반가워')">Hello pop</button>
  <button @:click="pop2">Hello pop2</button>
</template>

<style scoped></style>
