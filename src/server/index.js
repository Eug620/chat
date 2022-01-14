/*
 * @Author       : Eug
 * @Date         : 2021-03-09 16:24:25
 * @LastEditTime : 2021-12-06 16:15:07
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/index.js
 */
import user from './user'
import article from './article'
import _interface from './interface'
import comment from './comment'
import information from './information'

export default {
  ...user,
  ...article,
  ..._interface,
  ...comment,
  ...information
}
