<!--
 * @Author       : Eug
 * @Date         : 2021-11-30 14:19:18
 * @LastEditTime : 2021-11-30 14:19:19
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/LoadAnimation/index.vue
-->
<template>
  <div class="loader-container">
    <div class="loader-child"></div>
    <div class="loader-child"></div>
    <div class="loader-child"></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
// loadings
.loader-container {
  margin: 10vh auto;
  width: 100px;
  height: 100px;
  perspective: 780px;
  position: relative;
}

.loader-child {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;

  &:nth-of-type(1) {
    left: 0%;
    top: 0%;
    animation: rotate-one 1.15s linear infinite;
    border-bottom: 3px solid #5c5edc;
  }
  &:nth-of-type(2) {
    right: 0%;
    top: 0%;
    animation: rotate-two 1.15s linear infinite;
    border-right: 3px solid #9e85c3;
  }
  &:nth-of-type(3) {
    right: 0%;
    bottom: 0%;
    animation: rotate-three 1.15s linear infinite;
    border-top: 3px solid #e9908a;
  }
}
@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>