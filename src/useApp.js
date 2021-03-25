/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 14:49:17
 * @LastEditTime : 2021-03-25 15:17:08
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/useApp.js
 */
import { reactive } from 'vue'
import server from './server'

export const useAppStates = (props) => {
  return reactive({
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
}

export const useApp = (props, states, ctx) => {
  const useGetUserList = async () => {
    try {
      let res = await server.SearchUserList()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    useGetUserList
  }
}