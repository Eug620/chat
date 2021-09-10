<!--
 * @Author       : Eug
 * @Date         : 2021-09-10 19:44:55
 * @LastEditTime : 2021-09-10 20:06:00
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/layout-screen-saver/index.vue
-->
<template>
  <canvas v-show="isShowScreenSaver" id="layout-screen-saver"></canvas>
</template>

<script>
import { useStates, useMethods } from './useMethods'
import { toRefs, getCurrentInstance, defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'layout-screen-saver',
  setup (props, ctx) {
    const state = useStates(props)
    state.vm = getCurrentInstance().proxy
    const { useOnload, useWatchAction } = useMethods(props, state, ctx)
    onMounted(() => {
      window.requestAnimFrame = (function() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback);
          }
        );
      })
      useOnload()
      useWatchAction()
    })
    return {
      ...toRefs(state),
      ...useMethods(props, state, ctx)
    }
  }
})
</script>

<style>
#layout-screen-saver{
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>