/* 
 * @Author       : Eug
 * @Date         : 2021-11-25 16:26:55
 * @LastEditTime : 2021-11-29 18:18:23
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/utils/index.js
 */
import system from './system/index.js'
import dayjs from './dayjs/index.js'
export default {
  ...system,
  ...dayjs
}