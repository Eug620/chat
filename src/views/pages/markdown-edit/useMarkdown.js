import { reactive } from "vue";

export const state = reactive({
    currentVM: null,
    msgShow: "要显示的内容",
    dilogStatus: false,
    markedOption:{
        isShowIcon: true,
        isShowNav: true,
        isShowEdit:true,
        isFullPage: false,
        isShowPreview: true,
        mdValue: "## Chat-Editor"
    }
})

export const useMarkedEvent = (v) => {
    state.markedOption.mdValue = v
}