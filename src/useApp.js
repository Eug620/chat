/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 14:49:17
 * @LastEditTime : 2021-03-09 16:21:25
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/useApp.js
 */
import { reactive } from 'vue'

export const state = reactive({
  isShow: false,
  activeTabs: 'Dashboard',
  tabsList: [
    'Dashboard',
    'Team',
    'Projects',
    'Calendar',
    'Reports'
  ],
  mobelShowMenu: true,
  showUserInfo: false,
  useInfoSetting: [
    'Your Profile',
    'Settings',
    'Sign out'
  ],
  user: {
    userName: '张三',
    email: 'QQ.com'
  }
})