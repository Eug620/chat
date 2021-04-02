/* 
 * @Author       : Eug
 * @Date         : 2021-04-02 11:26:17
 * @LastEditTime : 2021-04-02 14:18:08
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/article/useState.js
 */
import { reactive } from "vue"
import server from '/@/server'

export const useStates = (props) => {
  return reactive({
    currentVM: null,
    background: 'https://farm5.staticflickr.com/4331/36972881175_5514d1dfc9_k.jpg?momo_cache_bg_uuid=51b49eaf-3b60-4456-ab49-4564b18523e4',
    detail: {
      "article_id": "",
      "article_title": "暂无标题",
      "article_describe": "暂无描述",
      "article_content": "## 暂无内容",
      "author": "暂无作者",
      "page_views": 0,
      "create_time": 0
    }
  })
}

export const useArticle = (props, state, {emit}) => {
  const useGetBackground = async () => {
    try {
      let res = await server.GetBackground()
      if (res.code === 200) {
        state.background = res.result.image_url
      }
    } catch (error) {
      console.error(error)
    }
  }
  const useGetArticleDetail = async () => {
    try {
      const { article_id } = state.currentVM.$route.query
      let res = await server.DetailArticle({article_id})
      if (res.code === 200) {
        Object.assign(state.detail, res.result)
      } else {
        emit('show-message', {
          msgText: res.result.msg || '获取文章失败!',
          msgIcon: 'msgIcon',
          msgColor: 'msgColor',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  return {
    useGetArticleDetail,
    useGetBackground
  }
}