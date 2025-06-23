<script setup>
import { ref, reactive, nextTick } from 'vue';

/* 
ref()
: 단일 값 반응형 // .value
ref()는 반응형으로 고나리되는 값이 담긴 특별한 상자 객체를 만들어서,
그 상자에 대한 **주소(참조값)**을 반환(리턴)하고,
실제 값은 그 상자의 value 속성 안에 저장된다.
ref 사용하는 방법
1. <script>에 import { ref } from "vue";을 임포트
2. 변수를 선언하고 값을 ref()로 감싸기
3. 변수 값을 변경할 때 변수.value에 변경할 값을 넣어주기
ref의 [ 장점 ]
1.타입 제한 없이 사용 가능함
2.템플릿에서 단일 변수로 사용할 수 있음

reactive()
: 객체 전체 반응형 // state.
객체를 반응형 상태로 만들어 주는 함수
전달된 객체 {sitUp: 0}를 반응형 객체로 변환한다.
이 값을 사용하는 컴포넌트가 자동으로 다시 레너링되며 상태를 관리하고 변경사항에 따라 업데이트 됨.
reactive 사용하는 방법
1.<script>에 import { reactive } from "vue";을 임포트
2.변수를 선언하고 값을 reactive()로 감싸기
3.property 값을 변경할 때 변수.property에 변경할 값을 넣어주기

주의할 점
reactive는 object, array 이외에는 사용 불가
reactive의 [ 장점 ]
1.자바스크립트와 템플릿 사이에 일관성이 있음
2.반응형 변수를 많이 선언할 때 간단하게 사용 가능
3.Vue2의 data()와 비슷함
 */

// ref메소드 : 반응형 상태 객체 주소값을 리턴, 초기값을 value 속성에 저장
const pushUp = ref(0);
const increasePushUp = () => {
  pushUp.value++;
  nextTick(() => {
    // 보통 이렇게 작성하진 않음
    console.log(document.querySelector('#pushUp').innerText);
  });
  console.log('푸시업 이벤트 발생!', pushUp.value);
};
// 둘 중에 마음에 드는 방법으로
const state = reactive({
  sitUp: 0, // 윗몸 일으키기 개수
});
const increaseSitUp = () => {
  state.sitUp++;
  console.log('싯업 이벤트 발생!', state.sitUp);
};
</script>

<template>
  <h1>Chapter05.vue - 반응형 상태</h1>
  <hr />
  <!-- :을 쓰지 않아서 변수의 주소값을 연결한 것은 아님 -->
  <div id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</div>
  <div id="sitUp">윗몸 일으키기 : {{ state.sitUp }}</div>
  <hr />
  <!-- @: 이벤트 바인딩 -->
  <button @click="increasePushUp">팔 굽혀 펴기 증가</button>
  <button @click="increaseSitUp">윗몸 일으키기 증가</button>
</template>

<style scoped></style>