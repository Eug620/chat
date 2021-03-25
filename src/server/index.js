/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:24:25
 * @LastEditTime : 2021-03-09 16:32:09
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/index.js
 */
import user from './user'
import article from './article'

export default {
  ...user,
  ...article
}