/* 
 * @Author       : Eug
 * @Date         : 2021-03-24 11:00:25
 * @LastEditTime : 2021-03-26 12:30:53
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/markdown-edit/useMarkdown.js
 */
import { reactive } from "vue";
import server from '/@/server'

export const useMarkStates = (props) => {
    return reactive({
        currentVM: null,
        msgShow: "要显示的内容",
        dilogStatus: false,
        markedOption: {
            isShowIcon: true,
            isShowNav: true,
            isShowEdit: true,
            isFullPage: false,
            isShowPreview: true,
            mdValue: "## Chat-Editor"
        },
        articleForm: {
            title: 'title',
            author: 'author',
            describe: 'describe'
        }
    })
}

export const useMark = (props, state, { emit }) => {
    const useMarkedEvent = (v) => {
        state.markedOption.mdValue = v
    }
    const _mergeProps = () => {
        return {
            "article_title": state.articleForm.title,
            "author": state.articleForm.author,
            "article_describe": state.articleForm.describe,
            "article_content": state.markedOption.mdValue
        }
    }
    const useSaveArticle = async () => {
        try {
            let res = await server.CreateArticle(_mergeProps())
            if (res.code === 200) {
                console.log(res,'200');
                emit('show-message', {
                    msgText: 'Add Article Success!!!',
                    msgIcon: 'msgIcon',
                    msgColor: 'msgColor',
                })
                setTimeout(() => {
                    state.currentVM.$router.push('Dashboard')
                },500)
            } else {
                console.log(res, 'error')
            }
        } catch (error) {
            console.log('error')
        }
    }

    return {
        useMarkedEvent,
        useSaveArticle
    }

}