/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 19:56:32
 * @LastEditTime : 2021-03-10 20:06:06
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/useComponents.js
 */
import ChatContainer from './chat-container/index.vue'
import ChatCard from './chat-card/index.vue'

export const useComponents = (app) => {
  app.component(ChatContainer.name, ChatContainer)
  app.component(ChatCard.name, ChatCard)
} 