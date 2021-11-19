/*
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-09-10 19:30:41
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import scroll from 'vue-scroll'
import { useLayoutComponents } from './components/index'
import { useComponents } from '/@/views/components/useComponents.js'
import './index.css'
const app = createApp(App)
useLayoutComponents(app)
useComponents(app)
app.use(Router)
app.use(scroll)
app.mount('#app')
