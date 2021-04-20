<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 17:57:32
 * @LastEditTime : 2021-04-20 18:19:19
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/hot-list/index.vue
-->
<template>
  <chat-container>
    <chat-card>
      <div class="divide-y divide-gray-100">
        <chat-nav>
          <chat-nav-item
            v-for="nav in navList"
            :key="nav"
            @click="useNavClick(nav)"
            :is-active="nav === activeNav"
          >{{nav}}</chat-nav-item>
        </chat-nav>
        <chat-list>
          <chat-list-item v-for="item in activeNavData" :key="item.id" :recipe="item" />
        </chat-list>
      </div>
    </chat-card>
  </chat-container>
</template>

<script>
import { defineComponent, toRefs, getCurrentInstance } from "vue";
import { useStates, useFunctions } from './useHotList'
export default defineComponent({
  setup(props, ctx) {
    const state = useStates(props)
    state.currentVm = getCurrentInstance().proxy
    const {
      useNavClick
    } = useFunctions(props, state, ctx)
    return {
      ...toRefs(state),
      useNavClick
    };
  }
});
</script>

<style>
</style>