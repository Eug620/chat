/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 12:33:38
 * @LastEditTime : 2021-04-20 16:54:34
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
