/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:23:25
 * @LastEditTime : 2021-03-11 11:06:18
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '/@/layout/index.vue'

const routes = [
  {
    path:'/',
    name:'layout',
    component:layout,
    redirect: 'dashboard',
    children:[
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('/@/views/pages/index/index.vue')
      },
      {
        path: 'hotList',
        name: 'hotList',
        component: () => import('/@/views/pages/hot-list/index.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import('/@/views/pages/login/index.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(), // hash
  routes,
  scrollBehavior (to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })

    // return desired position
  }
});

export default router