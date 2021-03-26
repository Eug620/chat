import { reactive } from 'vue'
import server from '/@/server'
import { cloneDeep } from  'lodash-es'
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
                state.articleList = cloneDeep(res.result)
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

    const useHello = () => {
        console.log('hello');
    }
    return {
        useHello,
        useGetList
    }
}