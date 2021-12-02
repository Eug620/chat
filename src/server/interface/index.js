/* 
 * @Author       : Eug
 * @Date         : 2021-12-02 15:09:11
 * @LastEditTime : 2021-12-02 15:11:12
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/interface/index.js
 */
import request from '/@/utils/axios'

const Url = {
  server: {
    getInterfaceDetail: '/getInterfaceDetail',
    getInterfaceLog: '/getInterfaceLog',
  }
}

export default {
  GetInterfaceDetail(params) {
    return request({
      url: Url['server'].getInterfaceDetail,
      method: 'get',
      params
    })
  },
  GetInterfaceLog(params) {
    return request({
      url: Url['server'].getInterfaceLog,
      method: 'get',
      params
    })
  }
}