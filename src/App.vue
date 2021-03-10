<!--
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-03-10 17:23:07
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/App.vue
-->
<template>
  <router-view/>
</template>

<script>
import { defineComponent, toRefs } from 'vue'
import { state } from './useApp'
import server from './server'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    return {
      ...toRefs(state)
    }
  }
})
</script>
