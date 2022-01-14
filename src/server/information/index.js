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
    searchInformationAll: '/information/all',
  }
}

export default {
  SearchInformationAll (params) {
    return request({
      url: Url['server'].searchInformationAll,
      method: 'get',
      params
    })
  }
}
