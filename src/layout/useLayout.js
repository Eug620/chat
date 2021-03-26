/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 17:44:35
 * @LastEditTime : 2021-03-26 15:40:15
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
    msgOption: {
      isShow: false,
      msgText: '这是一段提示信息',
      msgIcon: '',
      msgColor: ''
    },
    info: {
      isShow: false,
      isLogin: false,
      name: '',
      email: '',
      time: ''
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

  // 检测用户是否登录
  const useIsLogin = () => {
    // const res = {
    //   "user_name": "eug222222",
    //   "user_password": "eug222222",
    //   "user_email": "eug222222email",
    //   "create_time": 1607574815000,
    //   "update_time": 1607574815000,
    //   "user_id": ""
    // }
    // localStorage.setItem('EUG_USER_INFO', JSON.stringify(res))
    const { user_name, user_id } = JSON.parse(localStorage.getItem('EUG_USER_INFO')) || {}
    console.log(user_name, user_id);
  }
  
  return {
    useActiveMenuClass,
    useActiveCurrentMenu,
    useEditArticle,
    useShowMessage,
    useCloseMessage,
    useIsLogin
  }
}