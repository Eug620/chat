/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:24:25
 * @LastEditTime : 2021-04-02 14:13:08
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/index.js
 */
import user from './user'
import article from './article'
import image from './iamge'

export default {
  ...user,
  ...article,
  ...image
}