<!--
 * @Author       : Eug
 * @Date         : 2021-04-20 17:40:28
 * @LastEditTime : 2021-09-09 17:50:13
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-list/index.vue
-->
<template>
  <ul class="divide-y divide-gray-100 h-full overflow-scroll">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'chat-list'
}
</script>