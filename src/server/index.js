/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:24:25
 * @LastEditTime : 2021-12-02 15:17:38
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/index.js
 */
import user from './user'
import article from './article'
import _interface from './interface'

export default {
  ...user,
  ...article,
  ..._interface
}