/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:30:30
 * @LastEditTime : 2021-03-09 16:43:04
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/user/index.js
 */
import request from '/@/utils/axios'

const Url = {
  server: {
    login: '/user/login'
  }
}

export default {
  Login (data) {
    return request({
      url: Url['server'].login,
      methods: 'post',
      data
    })
  }
}