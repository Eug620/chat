/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 19:56:32
 * @LastEditTime : 2021-03-15 10:51:20
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/useComponents.js
 */
import ChatContainer from './chat-container/index.vue'
import ChatCard from './chat-card/index.vue'
import ChatEditor from './chat-editor/index.vue'

export const useComponents = (app) => {
  app.component(ChatContainer.name, ChatContainer)
  app.component(ChatCard.name, ChatCard)
  app.component(ChatEditor.name, ChatEditor)
} 