/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:00:09
 * @LastEditTime : 2021-11-30 15:23:39
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/main.js
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '/@/assets/styles/index.scss'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '/@/router'
import { pinia } from './store/index.js'
import { usePlugins } from './plugin/index.js'
import { useComponents } from '/@/components/useComponents.js'
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(mavonEditor)
useComponents(app)
usePlugins(app)
app.mount('#app')
