<!--
 * @Author       : Eug
 * @Date         : 2021-04-20 17:39:22
 * @LastEditTime : 2021-04-20 17:55:54
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-nav/index.vue
-->
<template>
  <nav class="p-4">
    <ul class="flex space-x-2">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'chat-nav'
}
</script>

<style>

</style>