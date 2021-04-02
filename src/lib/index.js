/* 
 * @Author       : Eug
 * @Date         : 2021-04-02 10:49:12
 * @LastEditTime : 2021-04-02 12:35:20
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/lib/index.js
 */
import _user from './user'
import _day from './day'

export default {
    ..._user,
    ..._day
}