/* 
 * @Author       : Eug
 * @Date         : 2021-03-26 12:12:13
 * @LastEditTime : 2021-03-26 12:28:02
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/layout-message/useLayoutMessage.js
 */
import { reactive, watch } from 'vue'

export const useStates = () => {
  return reactive({
    curremtVm: null
  })
}

export const useMessage = (props, state, { emit }) => {
  const useCloseMessage = () => {
    emit('msg-close')
  }

  return {
    useCloseMessage
  }
}