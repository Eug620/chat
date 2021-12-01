/* 
 * @Author       : Eug
 * @Date         : 2021-11-30 11:36:44
 * @LastEditTime : 2021-11-30 16:06:49
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/store/Route/index.js
 */
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
export const useRouteStore = defineStore({
  id: 'RouteStore',
  state: () => ({
    storeRoute: useRoute(),
    storeRouter: useRouter()
  }),
  getters: {
    getRouteMetaIsLabel() {
      return this.storeRoute.meta.isLabel || false
    },
    getRouteMetaKeepAlive() {
      return this.storeRoute.meta.keepAlive || false
    },
    getRouteQuery() {
      return this.storeRoute.query
    }
  }
})