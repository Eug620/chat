/* 
 * @Author       : Eug
 * @Date         : 2021-03-10 19:56:32
 * @LastEditTime : 2021-04-20 17:43:00
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/useComponents.js
 */
import ChatContainer from './chat-container/index.vue'
import ChatCard from './chat-card/index.vue'
import ChatEditor from './chat-editor/index.vue'
import ChatList from './chat-list/index.vue'
import ChatListItem from './chat-list-item/index.vue'
import ChatNav from './chat-nav/index.vue'
import ChatNavItem from './chat-nav-item/index.vue'

export const useComponents = (app) => {
  app.component(ChatContainer.name, ChatContainer)
  app.component(ChatCard.name, ChatCard)
  app.component(ChatEditor.name, ChatEditor)
  app.component(ChatList.name, ChatList)
  app.component(ChatListItem.name, ChatListItem)
  app.component(ChatNav.name, ChatNav)
  app.component(ChatNavItem.name, ChatNavItem)
} 