/* 
 * @Author       : Eug
 * @Date         : 2021-03-26 11:38:54
 * @LastEditTime : 2021-09-10 19:52:17
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/index.js
 */
import LayoutMessage from './layout-message/index.vue'
import LayoutInfo from './layout-info/index.vue'
import LayoutScreenSaver from './layout-screen-saver/index.vue'

export const useLayoutComponents = (app) => {
  app.component(LayoutMessage.name, LayoutMessage)
  app.component(LayoutInfo.name, LayoutInfo)
  app.component(LayoutScreenSaver.name, LayoutScreenSaver)
}