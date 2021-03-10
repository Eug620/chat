/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:30:30
 * @LastEditTime : 2021-03-10 11:41:46
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/user/index.js
 */
import request from '/@/utils/axios'

const Url = {
  server: {
    login: '/user/login',
    searchUserList: '/user/getUserList'
  }
}

export default {
  Login (data) {
    return request({
      url: Url['server'].login,
      method: 'post',
      data
    })
  },
  SearchUserList (params) {
    return request({
      url: Url['server'].searchUserList,
      method: 'get',
      params
    })
  }
}