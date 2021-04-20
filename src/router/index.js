/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:23:25
 * @LastEditTime : 2021-04-20 15:48:51
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
    redirect: 'Dashboard',
    children:[
      {
        path: 'Dashboard',
        name: 'Dashboard',
        meta: { keepAlive: true },
        component: () => import('/@/views/pages/index/index.vue')
      },
      {
        path: 'HotList',
        name: 'HotList',
        meta: { keepAlive: true },
        component: () => import('/@/views/pages/hot-list/index.vue')
      },
      {
        path: 'MarkdownEdit',
        name: 'MarkdownEdit',
        meta: { keepAlive: false },
        component: () => import('/@/views/pages/markdown-edit/index.vue')
      },
      {
        path: 'ArticleDetail',
        name: 'ArticleDetail',
        meta: { keepAlive: false },
        component: () => import('/@/views/pages/article/index.vue')
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