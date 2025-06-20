<script setup>
const message = 'There 1';
const messageObj = { name: 'Kim', age: 20 };
console.log(messageObj.name);
console.log(messageObj.toString());
const pageId = 'history';
let loading = true;
const parent = 'fruits';
const child = 'item';
const fruitList = ['사과', '바나나', '딸기', '배'];
</script>

<template>
  <h1>mustache.vue</h1>
  <div>
    Hello, <span>{{ message }}</span>
  </div>
  <!-- v-text는 directive(디렉티브)라고 부른다. 
         v로 시작하는 속성은 전부 디렉티브라고 생각하면 된다.
         객체 안에 들어있는 값을 출력 -->
  <div>Hello, <span v-text="message"></span></div>
  <div>Hello, messageObj.name: <span v-text="messageObj.name"></span></div>
  <!-- :id 앞에 v-bind 생략 가능 -->
  <div :id="pageId">페이지 아이디 div</div>

  <form>
    <input type="text" placeholder="아이디" :readonly="loading" />
    <input type="password" placeholder="비밀번호" :readonly="loading" />
    <button :disabled="loading">로그인</button>
    <ul :class="parent">
      <!-- key는 유일값으로(id처럼) -->
      <li :key="idx" v-for="(item, idx) in fruitList" :class="child">
        {{ item }}
      </li>
    </ul>
  </form>
</template>

<style scoped>
#history {
  color: red;
}
</style>
