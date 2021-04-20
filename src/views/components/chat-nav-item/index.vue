<!--
 * @Author       : Eug
 * @Date         : 2021-04-20 17:40:00
 * @LastEditTime : 2021-04-20 18:45:57
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-nav-item/index.vue
-->
<template>
  <li>
    <div
      :class="['block bg-white px-4 py-2 rounded-md cursor-pointer', { 'text-indigo-600': isActive }]"
    >
      <slot></slot>
    </div>
  </li>
</template>

<script>
import { toRefs } from 'vue'
export default {
  name: 'chat-nav-item',
  props: {
    isActive: Boolean,
  },
  setup (props, _ctx) {
    return {
      ...toRefs(props)
    }
  }
}
</script>
