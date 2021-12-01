/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:16:22
 * @LastEditTime : 2021-12-01 14:56:46
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/store/Home/index.js
 */
import { defineStore } from 'pinia'

export const useHomeStore = defineStore({
  id: 'HomeStore',
  state: () => ({
    navigationHeight: 60,
    // navigationOptions: ['首页', '沸点', '资讯', '小册', '活动', '开发者大会'],
    navigationOptions: ['首页', '测试1', '测试2'],
    classificationHeight: 45,
    classificationOptions:[
      {
        name: '最新',
        type: 'news'
      },
      {
        name: '热门',
        type: 'hot'
      },
      {
        name: '接口',
        type: 'interface'
      },
      {
        name: '我的',
        type: 'user'
      }
    ],
    layoutWidth: 960,
    articleTypes: [
      {
        type: 'hot',
        title: '热门'
      },
      {
        type: 'new',
        title: '最新'
      },
      {
        type: 'hottest',
        title: '热榜'
      }
    ]
  }),
  getters: {
    getNavigationHeight() {
      return this.navigationHeight + 'px';
    },
    getTransformNavigationHeight() {
      return '-' + this.navigationHeight + 'px';
    },
    getClassificationHeight() {
      return this.classificationHeight + 'px';
    },
    getTopHeightSum() {
      return this.navigationHeight + this.classificationHeight;
    },
    getTopHeight() {
      return this.navigationHeight + this.classificationHeight + 'px';
    },
    getLayoutWidth() {
      return this.layoutWidth + 'px';
    }
  },
  actions: {
    updateHomeStore({type, value})  {
      this[type] = value;
    }
  }
})
