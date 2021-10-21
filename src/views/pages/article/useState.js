/*
 * @Author       : Eug
 * @Date         : 2021-04-02 11:26:17
 * @LastEditTime : 2021-04-20 16:43:02
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/article/useState.js
 */
import { reactive, watch } from "vue"
import server from '/@/server'

export const useStates = (props) => {
  return reactive({
    currentVM: null,
    background: '',
    isGetDeatilLoading: true,
    detail: {
      article_id: '',
      article_title: '暂无标题',
      article_describe: '暂无描述',
      article_content: '## 暂无内容',
      author: '暂无作者',
      page_views: 0,
      create_time: 0
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
      state.isGetDeatilLoading = true
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
      state.isGetDeatilLoading = false
    } catch (error) {
      state.isGetDeatilLoading = false
      console.error(error)
    }
  }
  return {
    useGetArticleDetail,
    useGetBackground
  }
}
