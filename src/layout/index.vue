<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 17:16:43
 * @LastEditTime : 2021-03-26 12:03:35
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/layout/index.vue
-->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="chat-layout-cantainer bg-gray-100 fixed w-full h-full">
    <nav class="bg-white shadow-md absolute w-full">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link
                  v-for="menu in menuList"
                  :key="menu.name"
                  :to="menu.name"
                  :class="useActiveMenuClass(menu)"
                  @click.native="useActiveCurrentMenu(menu)"
                >
                  {{ menu.name }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class="bg-white p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button type="button" class="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img @click="useShowUserInfo" class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>
              <div v-if="isShowUserInfo" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a
                  v-for="setting in userInfoSetting"
                  :key="setting"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-white"
                  role="menuitem"
                >
                  {{ setting }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <layout-message
        v-if="msgOption.isShow"
        :msg-text="msgOption.msgText"
        :msg-icon="msgOption.msgIcon"
        :msg-color="msgOption.msgColor"
        @msg-close="() => msgOption.isShow = false"
      >
    </nav>
    <!-- message -->
    <!-- tools -->
    <span @click="useEditArticle" class="transform hover:rotate-180 duration-500 transition-all transition rounded-full inline-flex items-center px-4 py-4 fixed bottom-4 right-4 h-14 w-14 m-8 items-center bg-indigo-600  text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <svg t="1616686164030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2871" width="200" height="200"><path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2872" data-spm-anchor-id="a313x.7781069.0.i2" class="selected" fill="#ffffff"></path></svg>
    </span>
    <router-view
      @show-message="useShowMessage"
    />
  </div>
</template>

<script>
import { toRefs, getCurrentInstance, watch } from 'vue'
import { useLayout, useLayoutStates } from './useLayout'
export default {
  setup (props, ctx) {
    const state = useLayoutStates(props)
    state.currentVM = getCurrentInstance().proxy
    
    // 监听路由变化，给正确的路由显示选中样式
    watch(
      () => state.currentVM.$route,
      (o) => {
        state.menuList.forEach(v => v.isActive = v.name === o.name)
        state.activeMenu = o.name
      }
    )
    state.activeMenu = state.currentVM.$route.name || 'Dashboard'
    return {
      ...toRefs(state),
      ...useLayout(props, state, ctx)
    }
  }
}
</script>

<style>

</style>