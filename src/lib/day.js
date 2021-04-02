/* 
 * @Author       : Eug
 * @Date         : 2021-04-02 12:33:53
 * @LastEditTime : 2021-04-02 12:34:52
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/lib/day.js
 */
import dayjs from 'dayjs'
const FormatTimer = (time, fomattext = 'YYYY-MM-DD') => {
  return dayjs(time).format(fomattext)
}

export default {
  FormatTimer
}