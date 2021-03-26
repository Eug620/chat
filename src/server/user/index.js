/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:30:30
 * @LastEditTime : 2021-03-26 16:57:38
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/user/index.js
 */
import request from '/@/utils/axios'

const Url = {
  server: {
    login: '/user/login',
    searchUserList: '/user/getUserList',
    createUser: '/user/createUser'
    
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
  },
  CreateUser (data) {
    return request({
      url: Url['server'].createUser,
      method: 'post',
      data
    })
  }
}