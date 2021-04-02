/* 
 * @Author       : Eug
 * @Date         : 2021-04-02 10:49:13
 * @LastEditTime : 2021-04-02 14:32:43
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/index/useState.js
 */
import { reactive } from 'vue'
import server from '/@/server'
import { cloneDeep, reverse } from  'lodash-es'
export const useStates = () => {
    return reactive({
        currentVm: null,
        articleList: []
    })
}

export const useFunction = (props, state, { emit }) => {
    // 获取文章列表
    const useGetList = async () => {
        try {
            let res = await server.GetArticleList()
            if (res.code === 200) {
                state.articleList = reverse(cloneDeep(res.result))
            } else {
                emit('show-message', {
                    msgText: res.result.msg,
                    msgIcon: '',
                    msgColor: ''
                })
            }
        } catch (error) {
            emit('show-message', {
                msgText: 'Server Is Error!',
                msgIcon: '',
                msgColor: ''
            })
        }
    }

    const useToDetail = (articleList) => {
        state.currentVm.$router.push({
            name: 'ArticleDetail',
            query: {
                article_id: articleList
            }
        })
    }

    return {
        useGetList,
        useToDetail
    }
}