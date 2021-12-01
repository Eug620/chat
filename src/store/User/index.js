/* 
 * @Author       : Eug
 * @Date         : 2021-12-01 11:33:33
 * @LastEditTime : 2021-12-01 12:27:07
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/store/User/index.js
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    isLogin: false,
    userInfo: null
  }),
  actions: {
    refreshUserInfo() {
      const info = JSON.parse(localStorage.getItem('USER_INFO'))
      if (info) {
        this.isLogin = true
        this.userInfo = info
      } else {
        this.isLogin = false
        this.userInfo = null
      }
    },
    cleanUserInfo() {
      localStorage.removeItem('USER_INFO')
    },
    saveUserInfo(v) {
      localStorage.setItem('USER_INFO', JSON.stringify(v))
    }
  }
})