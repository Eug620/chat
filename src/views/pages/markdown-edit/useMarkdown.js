/* 
 * @Author       : Eug
 * @Date         : 2021-03-24 11:00:25
 * @LastEditTime : 2021-03-25 17:01:35
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/markdown-edit/useMarkdown.js
 */
import { reactive } from "vue";

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
        }
    })
}

export const useMark = (props, state, ctx) => {
    const useMarkedEvent = (v) => {
        state.markedOption.mdValue = v
    }

    return {
        useMarkedEvent
    }

}