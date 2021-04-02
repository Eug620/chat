<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 17:16:43
 * @LastEditTime : 2021-04-02 14:24:21
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/layout/index.vue
-->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="chat-layout-cantainer bg-gray-100 fixed w-full h-full">
    <nav class="bg-white shadow-md absolute w-full z-50">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <svg t="1616773907406" class="icon mr-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19251" width="26" height="26"><path d="M846.726194 462.606307l-108.698095 175.515454v238.176709l88.237277 78.646269H614.30409l85.999376-79.285669v-244.251015l-198.214175-280.377146h125.642211l59.464252-56.26725-105.501093-160.489541-110.296597-32.929129 13.427412-101.344989-167.203247 134.274118-226.667499 422.324071 158.251639 343.358102-72.571964 77.047768v46.03684h119.887606l29.412425-15.665314 23.977522 15.665314h607.750234v-54.988448l-136.19232-136.19232v-173.916953l72.891664-118.608804h26.215423l13.427412 103.582891h38.364034l9.910708-180.310958h-135.552919z" p-id="19252" fill="#4338ca"></path></svg>
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
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <span class="sr-only">Open user menu</span>
                <svg @click="useShowInfo" t="1616776023209" class="icon hover:bg-Gray-300 h-8 w-8 rounded-full transition-all" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2559" width="30" height="30"><path d="M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z" p-id="2560" fill="#4338ca"></path></svg>
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
      />
      <layout-info
        v-show="info.isShow"
        :info="info"
        @close="() => info.isShow = false"
        @show-message="useShowMessage"
        @refresh-status="useIsLogin"
      />
    </nav>
    <!-- tools -->
    <span @click="useEditArticle" class="animate-bounce z-40 transform hover:rotate-180 duration-500 transition-all transition rounded-full inline-flex items-center px-4 py-4 fixed bottom-4 right-4 h-14 w-14 m-8 items-center bg-indigo-600  text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <svg t="1616686164030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2871" width="200" height="200"><path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2872" data-spm-anchor-id="a313x.7781069.0.i2" class="selected" fill="#ffffff"></path></svg>
    </span>
    <router-view
      @show-message="useShowMessage"
      @show-info="(isShow) => info.isShow = isShow"
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
    const {
      useActiveMenuClass,
      useActiveCurrentMenu,
      useEditArticle,
      useShowMessage,
      useCloseMessage,
      useIsLogin,
      useShowInfo
    } = useLayout(props, state, ctx)
    state.activeMenu = state.currentVM.$route.name || 'Dashboard'
    useIsLogin()
    return {
      ...toRefs(state),
      useActiveMenuClass,
      useActiveCurrentMenu,
      useEditArticle,
      useShowMessage,
      useCloseMessage,
      useIsLogin,
      useShowInfo
    }
  }
}
</script>

<style>
a{
  color: #4338ca;
}
</style>