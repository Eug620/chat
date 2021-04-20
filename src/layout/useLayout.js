/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 17:44:35
 * @LastEditTime : 2021-04-20 15:24:01
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/layout/useLayout.js
 */

import { reactive } from "vue";
import { debounce } from 'lodash-es'
import lib from '/@/lib'
// states
export const useLayoutStates = (props) => {
  return reactive({
    keepAliveArray: [],
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
    msgOption: {
      isShow: false,
      msgText: '这是一段提示信息',
      msgIcon: '',
      msgColor: ''
    },
    info: {
      isShow: false,
      isLogin: false,
      user_name: '暂无用户信息',
      user_email: '暂无用户信息',
      create_time: '暂无用户信息',
      user_id: '暂无用户信息'
    }
  })
}

// methods
export const useLayout = (props, state, ctx) => {
  const useActiveMenuClass = (current) => {
    if (current.name === state.activeMenu) {
      // return "bg-gray-400 text-white px-3 py-2 rounded-md text-sm font-medium"
      return "text-black-300 px-3 py-2 rounded-md text-sm font-medium font-black border-2 border-indigo-600 rounded-full"
    } else {
      return "text-black-300 px-3 py-2 rounded-md text-sm font-medium font-black border-2 border-Blue-0 rounded-full"
    }
  }
  
  // 更新选中tab
  const useActiveCurrentMenu = (current) => {
    state.activeMenu = current.name
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

  const _resetUserInfo = () => {
    state.info.isLogin = false
    state.info.user_name = '暂无用户信息'
    state.info.user_email = '暂无用户信息'
    state.info.create_time = '暂无用户信息'
    state.info.user_id = '暂无用户信息'
  }

  // 检测用户是否登录
  const useIsLogin = () => {
    const { user_name, user_id, user_email, create_time } = lib.GetUserInfo()
    if (user_id && user_name) {
      state.info.isLogin = true
      state.info.user_name = user_name
      state.info.user_email = user_email
      state.info.create_time = create_time
      state.info.user_id = user_id
    } else {
      _resetUserInfo()
    }
  }

  // 显示用户登录
  const useShowInfo = () => {
    if (!state.info.isLogin) {
      state.info.user_name = '',
      state.info.user_email = '',
      state.info.create_time = '',
      state.info.user_id = ''
    }
    state.info.isShow = true
  }

  // 登出
  const useLoginOut = () => {
    lib.RemoveUserInfo()
    useIsLogin()
  }
  
  return {
    useActiveMenuClass,
    useActiveCurrentMenu,
    useEditArticle,
    useShowMessage,
    useCloseMessage,
    useIsLogin,
    useShowInfo,
    useLoginOut
  }
}