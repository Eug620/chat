/* 
 * @Author       : Eug
 * @Date         : 2021-03-26 11:38:54
 * @LastEditTime : 2021-03-26 13:55:54
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/index.js
 */
import LayoutMessage from './layout-message/index.vue'
import LayoutInfo from './layout-info/index.vue'

export const useLayoutComponents = (app) => {
  app.component(LayoutMessage.name, LayoutMessage)
  app.component(LayoutInfo.name, LayoutInfo)
}