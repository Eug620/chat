/* 
 * @Author       : Eug
 * @Date         : 2021-03-26 11:38:54
 * @LastEditTime : 2021-03-26 11:41:13
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/index.js
 */
import LayoutMessage from './layout-message/index.vue'

export const useLayoutComponents = (app) => {
  app.component(LayoutMessage.name, LayoutMessage)
}