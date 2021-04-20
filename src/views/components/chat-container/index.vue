<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 19:55:35
 * @LastEditTime : 2021-04-20 15:40:17
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-container/index.vue
-->
<template>
  <div class="h-screen overflow-scroll p-16">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'chat-container'
})
</script>

<style>

</style>