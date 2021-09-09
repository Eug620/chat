/* 
 * @Author       : Eug
 * @Date         : 2021-04-02 10:49:12
 * @LastEditTime : 2021-09-09 17:31:25
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/lib/index.js
 */
import _user from './user'
import _day from './day'
import _const from './const'

export default {
    ..._user,
    ..._day,
    ..._const
}