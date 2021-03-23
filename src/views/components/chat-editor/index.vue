<!--
 * @Author       : Eug
 * @Date         : 2021-03-12 16:28:04
 * @LastEditTime : 2021-03-16 11:35:29
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-editor/index.vue
-->
<template>
  <div class="mdContainer" :class="{ fullPage: isFullPage }">
    <div class="navContainer" v-if="isShowNav">
      <div class="nameContainer" v-if="isShowIcon" @click="useClickLogo">Editor</div>
      <div class="markContainer">
        <ul class="markListGroup">
          <li class="markListItem" @click="useAddStrong" title="strong">
            <b>B</b>
          </li>
          <li class="markListItem" @click="useAddItalic" title="italic">
            <i>I</i>
          </li>
          <li class="markListItem" @click="useAddStrikethrough" title="strikethrough">
            <i class="fa fa-strikethrough" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useAddHTitle(1)" title="H1-title">H1</li>
          <li class="markListItem" @click="useAddHTitle(2)" title="H2-title">H2</li>
          <li class="markListItem" @click="useAddHTitle(3)" title="H3-title">H3</li>
          <li class="markListItem" @click="useAddHTitle(4)" title="H4-title">H4</li>
          <li class="markListItem" @click="useAddHTitle(5)" title="H5-title">H5</li>
          <li class="markListItem" @click="useAddHTitle(6)" title="H6-title">H6</li>
          <li class="markListItem" @click="useAddLine" title="line">一</li>
          <li class="markListItem" @click="useAddQuote" title="quote">
            <i class="fa fa-quote-left" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useAddCode">
            <i class="fa fa-code" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useAddLink">
            <i class="fa fa-link" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useAddImage">
            <i class="fa fa-picture-o" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useAddTable" title="table">
            <i class="fa fa-table" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useAddUl" title="ul-list">
            <i class="fa fa-list-ul" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useAddOl" title="ol-list">
            <i class="fa fa-list-ol" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useShowFullPage" title="fullpage">
            <i class="fa fa-arrows-alt" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useShowPreview" title="preview">
            <i class="fa fa-eye-slash" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="useShowPreviewAll" title="previewAll">
            <i class="fa fa-eye" :aria-hidden="isShowTools"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="mdBodyContainer" :class="{ noMenu: !isShowNav }">
      <div class="editContainer" v-if="isShowEdit">
        <textarea name class="mdEditor" @keydown.9="tabFn" v-scroll="useEditScroll" v-model="value"></textarea>
      </div>
      <div class="previewContainer markdown-body" v-scroll="usePreviewScroll" v-html="useCompiledMarkdown" v-if="isShowPreview"></div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import range from "./rangeFn.js";
import marked from "marked";
import { reactive, toRefs, computed, watch } from "vue";
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  // sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: code => {
    return hljs.highlightAuto(code).value;
  }
});
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
export default {
  name: "chat-editor",
  props: [
    "mdValue",
    "isFullPage",
    "isShowEdit",
    "isShowPreview",
    "isShowNav",
    "isShowIcon"
  ],
  setup(props, { emit }) {
    // 数据
    const state = reactive({
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
    
    // emit
    watch(
      () => state.value,
      (o) => {
        emit('update:mdValue', o)
      }
    )

    // 不展示编辑&&不展示预览
    if (!state.isShowEdit && !state.isShowPreview) {
      state.isShowEdit = true;
      state.isShowPreview = true;
    }

    // 
    const tabFn = evt => {
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
    };
    const useShowPreviewAll = () => {
      if (!state.isShowEdit && state.isShowPreview) {
        state.isShowEdit = true;
        state.isShowPreview = true;
      } else {
        state.isShowEdit = false;
        state.isShowPreview = true;
      }
    };
    const useShowFullPage = () => {
      state.isFullPage = !state.isFullPage;
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
      ...toRefs(state),
      useClickLogo,
      useAddStrong,
      useAddItalic,
      useAddStrikethrough,
      useAddHTitle,
      useAddLine,
      useAddQuote,
      useAddCode,
      useAddLink,
      useAddImage,
      useAddTable,
      useAddUl,
      useAddOl,
      useShowFullPage,
      useShowPreview,
      useShowPreviewAll,
      useEditScroll,
      usePreviewScroll,
      useCompiledMarkdown
    }
  }
}
</script>
<style lang="scss" scoped>
.show{
  position: absolute;
  left: 0;
  top: 0;
}
.indexContainer {
  width: 100%;
  height: 100%;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.btnsContainer{
  position: absolute;
  z-index: 10;
  left: 65px;
  top: 5px;
  height: 25px;
  min-width: 300px;
  // background: pink;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .btn{
      display: inline-block;
      border:1px solid #ccc;
      margin-right: 10px;
      box-sizing: border-box;
      padding: 0 10px;
      background: #fff;
      font-size: 12px;
      height: 25px;
      line-height: 25px;
      cursor:pointer;
      moz-user-select: -moz-none; 
      -moz-user-select: none; 
      -o-user-select:none; 
      -khtml-user-select:none; /* you could also put state in a class */ 
      -webkit-user-select:none;/* and add the CSS class here instead */ 
      -ms-user-select:none; 
      user-select:none;/**禁止选中文字*/ 
      &:active{
          opacity: 0.8;
          background: lightblue;
      }
  }
}
.maskContainer{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.5);
  // z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .contentContainer{
      width: 60%;
      height: 60%;
      background: #fefefe;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      .showAreaContainer{
          height: 100%;
          width: 100%;
          outline: none;
          background: #eee;
          display: block;
          resize: none;
          padding: 10px;
          box-sizing: border-box;
      }
      .closeBtnContainer{
          position: absolute;
          height: 30px;
          width: 30px;
          right: -40px;
          top: -40px;
          border:1px solid #fff;
          border-radius: 50%;
          &::before{
              content: '';
              position: absolute;
              width: 70%;
              height: 2px;
              display: bblock;
              background: #fff;
              left: 15%;
              top: calc(50% - 1px);
              transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              -moz-transform: rotate(45deg);
          }
          &::after{
              content: '';
              position: absolute;
              width: 70%;
              height: 2px;
              display: bblock;
              background: #fff;
              left: 15%;
              top: calc(50% - 1px);
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
          }
      }
  }
}

.editorContainer {
  width: 90%;
  height: 90%;
  border: 1px solid #ddd;
}
</style>
<style lang="scss">
@import url("./index.css");
.mdContainer {
  width: 100%;
  height: 100%;
  background: lightblue;
  &.fullPage {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
  }
  .navContainer {
    width: 100%;
    height: 36px;
    background: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    .nameContainer {
      color: lightblue;
      margin-right: 10px;
      cursor: pointer;
    }
    .markContainer {
      width: auto;
      height: 100%;
      margin-left: 0px;
      ul.markListGroup {
        height: 100%;
        width: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li.markListItem {
          list-style: none;
          width: 20px;
          height: 20px;
          margin: 0 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 12px;
          color: #333;
          &:hover {
            background: #eee;
          }
        }
      }
    }
  }
  .mdBodyContainer {
    width: 100%;
    height: calc(100% - 36px);
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    &.noMenu {
      height: 100%;
    }
  }
}

// 编辑区域
.editContainer {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
  background: #333;
  color: #fff;
  padding: 10px;
  .mdEditor {
    height: 100%;
    width: 100%;
    background: transparent;
    outline: none;
    color: #fff;
    resize: none;
  }
}

// 预览区
.previewContainer {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  overflow: auto;
  padding: 10px;
}
</style>