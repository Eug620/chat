/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 17:44:35
 * @LastEditTime : 2021-03-10 18:00:47
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/layout/useLayout.js
 */

import { reactive } from "vue";

export const state = reactive({
  activeMenu: 'Dashboard',
  menuList: [
    'Dashboard',
    'hotList'
  ],
  isShowUserInfo: false,
  userInfoSetting: [
    'Your Profile',
    'Settings',
    'Sign out'
  ]
})

export const useActiveMenuClass = (current) => {
  if (current === state.activeMenu) {
    return "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
  } else {
    return "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  }
}

export const useActiveCurrentMenu = (current) => {
  state.activeMenu = current
}

export const useShowUserInfo = () => {
  state.isShowUserInfo = !state.isShowUserInfo
}