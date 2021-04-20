<!--
 * @Author       : Eug
 * @Date         : 2021-04-20 17:40:28
 * @LastEditTime : 2021-04-20 17:43:34
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-list/index.vue
-->
<template>
  <ul class="divide-y divide-gray-100">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'chat-list'
}
</script>