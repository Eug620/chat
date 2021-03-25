<!--
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-03-25 15:20:28
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/App.vue
-->
<template>
  <router-view/>
</template>

<script>
import { defineComponent, toRefs, onMounted } from 'vue'
import { useAppStates, useApp } from './useApp'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup (props, ctx) {
    const state = useAppStates(props)
    const {
      useGetUserList
    } = useApp(props, state, ctx)
    
    onMounted(() => {
      useGetUserList()
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
