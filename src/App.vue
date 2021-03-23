<!--
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-03-23 19:26:09
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/App.vue
-->
<template>
  <router-view/>
</template>

<script>
import { defineComponent, toRefs, onMounted } from 'vue'
import { state } from './useApp'
import server from './server'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    const useGetUserList = async () => {
      try {
        let res = await server.SearchUserList()
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    onMounted(() => {
      useGetUserList()
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
