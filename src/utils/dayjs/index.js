/* 
 * @Author       : Eug
 * @Date         : 2021-11-29 18:14:14
 * @LastEditTime : 2021-12-06 18:37:52
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/utils/dayjs/index.js
 */
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
// import updateLocale from 'dayjs/plugin/updateLocale'
import zh from 'dayjs/locale/zh'
dayjs.extend(relativeTime)
// dayjs.extend(updateLocale)
dayjs.locale(zh)
const FormatTimer = (time, fomattext = 'YYYY-MM-DD') => {
  return dayjs(time).format(fomattext)
}
const FormatTimerSecond = (time, fomattext = 'YYYY-MM-DD hh:mm:ss') => {
  return dayjs(time).format(fomattext)
}

const FormatRelativeTime = (time) => {
  return dayjs().to(dayjs(time)) 
}
export default {
  FormatTimer,
  FormatTimerSecond,
  FormatRelativeTime
}