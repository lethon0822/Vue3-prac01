<script setup>
    const message = 'There 1'
    const messageObj = {name: 'Kim', age: 20};
    console.log(messageObj.name);
    console.log(messageObj.toString());
</script>

<template>
    <h1>mustache.vue</h1>
    <div>Hello, <span>{{ message }}</span></div>
    <!-- v-text는 directive(디렉티브)라고 부른다. 
         v로 시작하는 속성은 전부 디렉티브라고 생각하면 된다.
         객체 안에 들어있는 값을 출력-->
    <div>Hello, <span v-text="message"></span></div>
    <div>Hello, messageObj.name: <span v-text="messageObj.name"></span></div>
</template>

<style scoped>

</style>