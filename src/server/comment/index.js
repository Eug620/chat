/* 
 * @Author       : Eug
 * @Date         : 2021-12-06 16:14:51
 * @LastEditTime : 2021-12-06 16:19:30
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/comment/index.js
 */
import request from '/@/utils/axios'

const Url = {
  server: {
    createComment: '/comment/create',
    getCommentAll: '/comment/all'
  }
}

export default {
  GetCommentAll(params) {
    return request({
      url: Url['server'].getCommentAll,
      method: 'get',
      params
    })
  },
  CreateComment(data) {
    return request({
      url: Url['server'].createComment,
      method: 'post',
      data
    })
  }
}