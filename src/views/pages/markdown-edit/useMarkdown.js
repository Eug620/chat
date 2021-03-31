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
import lib from '/@/lib'

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
            title: '',
            describe: ''
        }
    })
}

export const useMark = (props, state, { emit }) => {
    const useMarkedEvent = (v) => {
        state.markedOption.mdValue = v
    }
    const _mergeProps = () => {
        const { user_name, user_id } = lib.GetUserInfo()
        return {
            "article_title": state.articleForm.title,
            "author": user_name || "",
            "article_describe": state.articleForm.describe,
            "article_content": state.markedOption.mdValue,
            "user_id": user_id || ""
        }
    }
    const useSaveArticle = async () => {
        try {
            const _info = lib.GetUserInfo()
            if (_info) {
                let res = await server.CreateArticle(_mergeProps())
                if (res.code === 200) {
                    console.log(res,'200');
                    emit('show-message', {
                        msgText: '新增文章成功！',
                        msgIcon: 'msgIcon',
                        msgColor: 'msgColor',
                    })
                    setTimeout(() => {
                        state.currentVM.$router.push('Dashboard')
                    },500)
                } else {
                    console.log(res, 'error')
                    emit('show-message', {
                        msgText: '新增文章失败！',
                        msgIcon: 'msgIcon',
                        msgColor: 'msgColor',
                    })
                }
            } else {
                emit('show-message', {
                    msgText: '请登录！！！',
                    msgIcon: 'msgIcon',
                    msgColor: 'msgColor',
                })
                setTimeout(() => {
                    emit('show-info', true)
                }, 500)
            }
        } catch (error) {
            emit('show-message', {
                msgText: '服务器错误！',
                msgIcon: 'msgIcon',
                msgColor: 'msgColor',
            })
        }
    }

    return {
        useMarkedEvent,
        useSaveArticle
    }

}