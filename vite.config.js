/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:42:17
 * @LastEditTime : 2021-03-09 16:42:25
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/vite.config.js
 */
const {resolve} = require('path')
export default {
    alias: {
        '/@/': resolve(__dirname, 'src')
    }
}