<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 19:55:56
 * @LastEditTime : 2021-04-20 15:40:00
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-card/index.vue
-->
<template>
  <div class="m-4 hover:shadow-lg relative px-4 py-4 bg-white shadow-md sm:rounded-3xl">
    <slot/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'chat-card'
})
</script>

<style>

</style>