<!--
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-03-26 16:15:17
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/App.vue
-->
<template>
  <router-view/>
</template>

<script>
import { defineComponent, toRefs, onMounted } from 'vue'
// import { useAppStates, useApp } from './useApp'
import { useAppStates } from './useApp'
export default defineComponent({
  name: 'App',
  components: {},
  setup (props, ctx) {
    const state = useAppStates(props)
    // const { } = useApp(props, state, ctx)
    return {
      ...toRefs(state)
    }
  }
})
</script>
