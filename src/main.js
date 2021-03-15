/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-03-12 16:27:20
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import scroll from 'vue-scroll'
import { useComponents } from '/@/views/components/useComponents.js'
import './index.css'

const app = createApp(App)
useComponents(app)
app.use(Router)
app.use(scroll)
app.mount('#app')
