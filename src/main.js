/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-03-10 20:05:46
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import { useComponents } from '/@/views/components/useComponents.js'
import './index.css'

const app = createApp(App)
useComponents(app)
app.use(Router)
app.mount('#app')
