/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 14:49:17
 * @LastEditTime : 2021-03-09 14:51:16
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/useApp.js
 */
import { reactive } from 'vue'

export const state = reactive({
  activeTabs: 'Dashboard',
  tabsList: [
    'Dashboard',
    'Team',
    'Projects',
    'Calendar',
    'Reports'
  ]
})