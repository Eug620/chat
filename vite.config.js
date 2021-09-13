/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:42:17
 * @LastEditTime : 2021-09-13 17:47:00
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/vite.config.js
 */
const { resolve } = require('path')
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    resolve: {
        alias: {
            '/@': resolve(__dirname, 'src')
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://47.93.229.170:3000',
                // target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }

    },
    base: './',
    build: {
        assetsDir: 'assets',
        // sourcemap: true
    }
}
