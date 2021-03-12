/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 17:44:35
 * @LastEditTime : 2021-03-11 18:01:57
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/layout/useLayout.js
 */

import { reactive } from "vue";

export const state = reactive({
  currentVM: null,
  activeMenu: 'Dashboard',
  menuList: [
    'Dashboard',
    'HotList',
    'MarkdownEdit'
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
    return "bg-gray-400 text-white px-3 py-2 rounded-md text-sm font-medium"
  } else {
    return "text-black-300 hover:bg-black-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
  }
}

export const useActiveCurrentMenu = (current) => {
  state.activeMenu = current
}

export const useShowUserInfo = () => {
  state.isShowUserInfo = !state.isShowUserInfo
}