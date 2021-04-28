/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:42:17
 * @LastEditTime : 2021-04-28 17:33:15
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
        '/api': {
          target: 'http://47.93.229.170:3000',
          // target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
    },
    base: './',
    assetsDir: 'assets'
}
