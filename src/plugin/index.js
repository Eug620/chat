/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:09:51
 * @LastEditTime : 2021-11-22 11:11:15
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/plugin/index.js
 */

import { useIcons } from './useIcons'
export const usePlugins = (app) => {
  useIcons(app)
}