/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:23:05
 * @LastEditTime : 2021-12-06 17:43:33
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/useComponents.js
*/
import ActiveType from './ActiveType/index.vue'
import Classification from './Classification/index.vue'
import Navigation from './Navigation/index.vue'
import RightViews from './RightViews/index.vue'
import TitleItem from './TitleItem/index.vue'
import LoadAnimation from './LoadAnimation/index.vue'
import DiscussionArea from './DiscussionArea/index.vue'

export const useComponents = (app) => {
  app.component('ActiveType', ActiveType)
  app.component('Classification', Classification)
  app.component('Navigation', Navigation)
  app.component('RightViews', RightViews)
  app.component('TitleItem', TitleItem)
  app.component('LoadAnimation', LoadAnimation)
  app.component('DiscussionArea', DiscussionArea)
}