/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 17:44:35
 * @LastEditTime : 2021-03-25 17:02:06
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/layout/useLayout.js
 */

import { reactive, watch } from "vue";

// states
export const useLayoutStates = (props) => {
  return reactive({
    currentVM: null,
    activeMenu: 'Dashboard',
    menuList: [
      'Dashboard',
      'HotList'
      // 'MarkdownEdit'
    ],
    isShowUserInfo: false,
    userInfoSetting: [
      'Your Profile',
      'Settings',
      'Sign out'
    ]
  })
}

// methods
export const useLayout = (props, state, ctx) => {
  const useActiveMenuClass = (current) => {
    if (current === state.activeMenu) {
      return "bg-gray-400 text-white px-3 py-2 rounded-md text-sm font-medium"
    } else {
      return "text-black-300 hover:bg-black-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
    }
  }
  
  const useActiveCurrentMenu = (current) => {
    state.activeMenu = current
  }

  const useShowUserInfo = () => {
    state.isShowUserInfo = !state.isShowUserInfo
  }
  
  return {
    useActiveMenuClass,
    useActiveCurrentMenu,
    useShowUserInfo
  }
}