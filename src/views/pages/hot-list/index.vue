<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 17:57:32
 * @LastEditTime : 2021-09-09 18:13:59
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/hot-list/index.vue
-->
<template>
  <chat-container class="flex h-full">
    <chat-card class="flex-grow ">
      <div class="divide-y h-full divide-gray-100 flex flex-col">
        <chat-nav class="flex-none">
          <chat-nav-item
            v-for="nav in navList"
            :key="nav.value"
            @click="useNavClick(nav.value)"
            :is-active="nav.value === activeNav"
          >{{nav.label}}</chat-nav-item>
        </chat-nav>
        <chat-list class="flex-1 h-full">
          <chat-list-item v-for="item in activeNavData" :key="item.id" :recipe="item" />
        </chat-list>
      </div>
    </chat-card>
    <chat-card class="flex-none w-1/4 rounded-sm">
      <div class="border border-indigo-600 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex flex-col space-x-4">
          <div class="rounded-full bg-indigo-600 h-12 w-12 m-auto space-y-4"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-indigo-600 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-indigo-600 rounded"></div>
              <div class="h-4 bg-indigo-600 rounded w-5/6"></div>
            </div>
          </div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-indigo-600 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-indigo-600 rounded"></div>
              <div class="h-4 bg-indigo-600 rounded w-5/6"></div>
            </div>
          </div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-indigo-600 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-indigo-600 rounded"></div>
              <div class="h-4 bg-indigo-600 rounded w-5/6"></div>
            </div>
          </div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-indigo-600 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-indigo-600 rounded"></div>
              <div class="h-4 bg-indigo-600 rounded w-5/6"></div>
            </div>
          </div>
        </div>
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