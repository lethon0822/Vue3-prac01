<script setup>
const props = defineProps ({
    color: String
});
// color라는 속성으로 데이터를 받을 수 있다.
// {{ }} template(HTML)안에서 상수 혹은 변수에 담겨있는 값(Value)를 표시할때
</script>

<template>
    <!-- :style ==> vue 문법, 객체를 넘겨 주어 인라인 스타일을 사용
        괄호 2개 겹쳐져 있는 것은 콧수염 템플릿 -->
    <!-- 원래 undefined가 찍혀야 하지만 vue는 undefined와 null을 찍지 않음 -->
    <div :style="{color:props.color}">{{props.color || 'BLACK!! '}}BLACK TIRE</div>
    <div style="background-color: blue; color:antiquewhite;">BLACK TIRE</div>
</template>

<style scoped>
</style>