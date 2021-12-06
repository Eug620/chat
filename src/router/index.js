/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:12:01
 * @LastEditTime : 2021-12-06 19:43:47
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import { ElLoading } from "element-plus";
import { reactive, nextTick } from 'vue'
let loadings = reactive(null)
const routes = [
  {
    path:'/',
    name:'layout',
    component:() => import('/@/layout/index.vue'),
    redirect: 'news',
    children:[
      {
        path: 'news',
        name: 'news',
        meta: { keepAlive: true },
        component: () => import('/@/views/news/index.vue')
      },
      {
        path: 'hot',
        name: 'hot',
        meta: { keepAlive: true },
        component: () => import('/@/views/hot/index.vue')
      },
      {
        path: 'interface',
        name: 'interface',
        meta: { keepAlive: true },
        component: () => import('/@/views/interface/index.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: { keepAlive: true },
        component: () => import('/@/views/user/index.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        // meta: { keepAlive: false, isLabel: true },
        meta: { keepAlive: false },
        component: () => import('/@/views/detail/index.vue')
      },
      {
        path: 'create',
        name: 'create',
        meta: { keepAlive: false, isLabel: true },
        component: () => import('/@/views/create/index.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', component: () => import('/@/views/NotFound/index.vue') }
]

const rotuer = createRouter({
  history: createWebHashHistory(),
  routes
})
rotuer.beforeEach(async (to,form, next)=>{
   loadings = ElLoading.service({
    lock: true,
    text: '加载中',
    background: 'rgba(244, 245, 245, .7)',
  })
  next()
})
rotuer.afterEach((to) =>{
  if (loadings) {
    nextTick(() =>{
      loadings.close()
    })
  }
})

export default rotuer