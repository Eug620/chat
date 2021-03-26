/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 17:44:35
 * @LastEditTime : 2021-03-26 12:03:48
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/layout/useLayout.js
 */

import { reactive } from "vue";
import { debounce } from 'lodash'
// states
export const useLayoutStates = (props) => {
  return reactive({
    currentVM: null,
    activeMenu: 'Dashboard',
    menuList: [
      {
        name: 'Dashboard',
        isActive: false
      },
      {
        name:'HotList',
        isActive: false 
      }
      // 'MarkdownEdit'
    ],
    isShowUserInfo: false,
    userInfoSetting: [
      'Your Profile',
      'Settings',
      'Sign out'
    ],
    msgOption: {
      isShow: false,
      msgText: '这是一段提示信息',
      msgIcon: '',
      msgColor: ''
    }
  })
}

// methods
export const useLayout = (props, state, ctx) => {
  const useActiveMenuClass = (current) => {
    if (current.name === state.activeMenu) {
      return "bg-gray-400 text-white px-3 py-2 rounded-md text-sm font-medium"
    } else {
      return "text-black-300 hover:bg-black-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
    }
  }
  
  // 更新选中tab
  const useActiveCurrentMenu = (current) => {
    state.activeMenu = current.name
  }

  // 显示用户功能
  const useShowUserInfo = () => {
    state.isShowUserInfo = !state.isShowUserInfo
  }

  const useCloseMessage = debounce(() => {
    setTimeout(() => {
      state.msgOption.isShow = false
    }, 5000)
  }, 1000)

  // 显示message
  const useShowMessage = ({ msgText, msgIcon, msgColor }) => {
    state.msgOption.msgText = msgText
    state.msgOption.msgIcon = msgIcon
    state.msgOption.msgColor = msgColor
    state.msgOption.isShow = true
    useCloseMessage()
  }

  // 前往文章编辑
  const useEditArticle = () => {
    state.currentVM.$router.push({
      name: 'MarkdownEdit'
    })
  }
  
  return {
    useActiveMenuClass,
    useActiveCurrentMenu,
    useShowUserInfo,
    useEditArticle,
    useShowMessage,
    useCloseMessage
  }
}