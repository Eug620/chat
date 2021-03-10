/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-03-10 17:27:04
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import './index.css'

const app = createApp(App)
app.use(Router)
app.mount('#app')
