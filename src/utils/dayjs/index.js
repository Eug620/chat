/* 
 * @Author       : Eug
 * @Date         : 2021-11-29 18:14:14
 * @LastEditTime : 2021-11-29 18:14:14
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/utils/day/index.js
 */
import dayjs from 'dayjs'
const FormatTimer = (time, fomattext = 'YYYY-MM-DD') => {
  return dayjs(time).format(fomattext)
}
const FormatTimerSecond = (time, fomattext = 'YYYY-MM-DD hh:mm:ss') => {
  return dayjs(time).format(fomattext)
}

export default {
  FormatTimer,
  FormatTimerSecond
}