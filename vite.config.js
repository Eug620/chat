/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:42:17
 * @LastEditTime : 2021-03-10 11:43:10
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/vite.config.js
 */
const {resolve} = require('path')
export default {
    alias: {
        '/@/': resolve(__dirname, 'src')
    },
    proxy: {
        // 如果是 /lsbdb 打头，则访问地址如下
        // '/': 'http://47.93.229.170:3000/',
        // 如果是 /lsbdb 打头，则访问地址如下
        '/user': {
          target: 'http://47.93.229.170:3000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/user/, '/user')
        }
    }
}