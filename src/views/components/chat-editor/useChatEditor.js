/* 
 * @Author       : Eug
 * @Date         : 2021-03-25 15:54:46
 * @LastEditTime : 2021-03-25 16:13:46
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-editor/useChatEditor.js
 */
import range from "./rangeFn.js";
import { reactive, computed } from "vue";
import marked from "marked";

// utils
const insertContent = (val, that) => {
  let textareaDom = document.querySelector(".mdEditor");
  let value = textareaDom.value;
  let point = range.getCursortPosition(textareaDom);
  let lastChart = value.substring(point - 1, point);
  let lastFourCharts = value.substring(point - 4, point);
  if (lastChart != "\n" && value != "" && lastFourCharts != "    ") {
    val = "\n" + val;
    range.insertAfterText(textareaDom, val);
  } else {
    range.insertAfterText(textareaDom, val);
  }
  that.value = document.querySelector(".mdEditor").value;
};

// state
export const useChatEditorStates = (props) => {
  return reactive({
    isShowTools: true,
    value: props.mdValue || "",
    isShowEdit: Boolean(props.isShowEdit),
    isShowPreview: Boolean(props.isShowPreview),
    isFullPage: Boolean(props.isFullPage),
    isShowNav: Boolean(props.isShowNav),
    isShowIcon: Boolean(props.isShowIcon),
    maxuseEditScrollHeight: 0,
    maxusePreviewScrollHeight: 0
  });
}

// methods
export const useChatEditor = (props, state, emit) => {
   // 
   const useTabEvent = evt => {
    insertContent("    ", state);
    // 屏蔽屌tab切换事件
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  };

  // 插入图片
  const useAddImage = evt => {
    insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", state);
  };

  // 插入标题
  const useAddHTitle = index => {
    let tmp = "";
    switch (index) {
      case 1:
        tmp = "# ";
        break;
      case 2:
        tmp = "## ";
        break;
      case 3:
        tmp = "### ";
        break;
      case 4:
        tmp = "#### ";
        break;
      case 5:
        tmp = "##### ";
        break;
      case 6:
        tmp = "###### ";
        break;
      default:
        break;
    }
    insertContent(tmp, state);
  };

  // 插入代码
  const useAddCode = () => {
    let textareaDom = document.querySelector(".mdEditor");
    let value = textareaDom.value;
    let point = range.getCursortPosition(textareaDom);
    let lastChart = value.substring(point - 1, point);
    insertContent("```\n\n```", state);
    if (lastChart != "\n" && value != "") {
      range.setCaretPosition(textareaDom, point + 5);
    } else {
      range.setCaretPosition(textareaDom, point + 4);
    }
  };

  // 
  const useAddStrikethrough = () => {
    let textareaDom = document.querySelector(".mdEditor");
    let value = textareaDom.value;
    let point = range.getCursortPosition(textareaDom);
    let lastChart = value.substring(point - 1, point);
    insertContent("~~~~", state);
    if (lastChart != "\n" && value != "") {
      range.setCaretPosition(textareaDom, point + 3);
    } else {
      range.setCaretPosition(textareaDom, point + 2);
    }
  };
  const useAddStrong = () => {
    let textareaDom = document.querySelector(".mdEditor");
    let value = textareaDom.value;
    let point = range.getCursortPosition(textareaDom);
    let lastChart = value.substring(point - 1, point);
    insertContent("****", state);
    if (lastChart != "\n" && value != "") {
      range.setCaretPosition(textareaDom, point + 3);
    } else {
      range.setCaretPosition(textareaDom, point + 2);
    }
  };
  const useAddItalic = () => {
    let textareaDom = document.querySelector(".mdEditor");
    let value = textareaDom.value;
    let point = range.getCursortPosition(textareaDom);
    let lastChart = value.substring(point - 1, point);
    insertContent("**", state);
    if (lastChart != "\n" && value != "") {
      range.setCaretPosition(textareaDom, point + 2);
    } else {
      range.setCaretPosition(textareaDom, point + 1);
    }
  };
  const setStrong = () => {
    let textareaDom = document.querySelector(".mdEditor");
    let point = range.getCursortPosition(textareaDom);
  };
  const useAddLine = () => {
    insertContent("\n----\n", state);
  };
  const useAddLink = () => {
    insertContent("[Vue](https://cn.vuejs.org/images/logo.png)", state);
  };
  const useAddQuote = () => {
    let textareaDom = document.querySelector(".mdEditor");
    let value = textareaDom.value;
    let point = range.getCursortPosition(textareaDom);
    let lastChart = value.substring(point - 1, point);
    insertContent("> ", state);
    if (lastChart != "\n" && value != "") {
      range.setCaretPosition(textareaDom, point + 3);
    } else {
      range.setCaretPosition(textareaDom, point + 2);
    }
  };
  const useAddTable = () => {
    insertContent("\nheader 1 | header 2\n", state);
    insertContent("---|---\n", state);
    insertContent("row 1 col 1 | row 1 col 2\n", state);
    insertContent("row 2 col 1 | row 2 col 2\n\n", state);
  };
  const useAddUl = () => {
    insertContent("* ", state);
  };
  const useAddOl = () => {
    insertContent("1. ", state);
  };
  const useShowPreview = () => {
    if (!state.isShowEdit) {
      state.isShowEdit = true;
      state.isShowPreview = !state.isShowPreview;
    } else {
      state.isShowPreview = !state.isShowPreview;
    }
    emit('update:isShowPreview', state.isShowPreview)
  };
  const useShowPreviewAll = () => {
    if (!state.isShowEdit && state.isShowPreview) {
      state.isShowEdit = true;
      state.isShowPreview = true;
    } else {
      state.isShowEdit = false;
      state.isShowPreview = true;
    }
    emit('update:isShowEdit', state.isShowEdit)
  };
  const useShowFullPage = () => {
    state.isFullPage = !state.isFullPage;
    emit('update:isFullPage', state.isFullPage)
    let maxuseEditScrollHeight =
      document.querySelector(".mdEditor").scrollHeight -
      document.querySelector(".mdEditor").clientHeight;
    let maxusePreviewScrollHeight =
      document.querySelector(".previewContainer").scrollHeight -
      document.querySelector(".previewContainer").clientHeight;
    state.maxuseEditScrollHeight = maxuseEditScrollHeight;
    state.maxusePreviewScrollHeight = maxusePreviewScrollHeight;
  };
  const usePreviewScroll = (e, position) => {
    if (state.maxuseEditScrollHeight !== 0) {
      let topPercent = position.scrollTop / state.maxusePreviewScrollHeight;
      document.querySelector(".mdEditor").scrollTop =
        state.maxuseEditScrollHeight * topPercent;
    }
  };
  const useEditScroll = (e, position) => {
    if (state.maxusePreviewScrollHeight !== 0) {
      let topPercent = position.scrollTop / state.maxuseEditScrollHeight;
      document.querySelector(".previewContainer").scrollTop =
        state.maxusePreviewScrollHeight * topPercent;
    }
  };
  const useClickLogo = () => {
    // window.open("https://github.com/ovenslove/vue-mdEditor");
  };
  const useCompiledMarkdown = computed(() => {
    return marked(state.value, {
      // sanitize: true
    });
  });
  return {
    useTabEvent,
    useAddImage,
    useAddHTitle,
    useAddCode,
    useAddStrikethrough,
    useAddStrong,
    useAddItalic,
    setStrong,
    useAddLine,
    useAddLink,
    useAddQuote,
    useAddTable,
    useAddUl,
    useAddOl,
    useShowPreview,
    useShowPreviewAll,
    useShowFullPage,
    usePreviewScroll,
    useEditScroll,
    useClickLogo,
    useCompiledMarkdown
  }
}