/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:10:08
 * @LastEditTime : 2021-11-22 11:11:43
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/plugin/useIcons.js
 */
import * as ElementPlusIcons from '@element-plus/icons'

export const useIcons = (app) => {
  for(var icon in ElementPlusIcons) {
    app.component(icon, ElementPlusIcons[icon])
  }
}