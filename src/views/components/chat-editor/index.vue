<!--
 * @Author       : Eug
 * @Date         : 2021-03-12 16:28:04
 * @LastEditTime : 2021-03-16 11:35:29
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-editor/index.vue
-->
<template>
  <div class="mdContainer" :class="{ fullPage: fullPageStatus }">
    <div class="navContainer" v-if="navStatus">
      <div class="nameContainer" v-if="icoStatusP" @click="happyDay">Editor</div>
      <div class="markContainer">
        <ul class="markListGroup">
          <li class="markListItem" @click="addStrong" title="strong">
            <b>B</b>
          </li>
          <li class="markListItem" @click="addItalic" title="italic">
            <i>I</i>
          </li>
          <li class="markListItem" @click="addStrikethrough" title="strikethrough">
            <i class="fa fa-strikethrough" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="addHTitle(1)" title="H1-title">H1</li>
          <li class="markListItem" @click="addHTitle(2)" title="H2-title">H2</li>
          <li class="markListItem" @click="addHTitle(3)" title="H3-title">H3</li>
          <li class="markListItem" @click="addHTitle(4)" title="H4-title">H4</li>
          <li class="markListItem" @click="addHTitle(5)" title="H5-title">H5</li>
          <li class="markListItem" @click="addHTitle(6)" title="H6-title">H6</li>
          <li class="markListItem" @click="addLine" title="line">一</li>
          <li class="markListItem" @click="addQuote" title="quote">
            <i class="fa fa-quote-left" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="addCode">
            <i class="fa fa-code" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="addLink">
            <i class="fa fa-link" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="addImage">
            <i class="fa fa-picture-o" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="addTable" title="table">
            <i class="fa fa-table" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="addUl" title="ul-list">
            <i class="fa fa-list-ul" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="addOl" title="ol-list">
            <i class="fa fa-list-ol" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="fullPageFn" title="fullpage">
            <i class="fa fa-arrows-alt" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="previewFn" title="preview">
            <i class="fa fa-eye-slash" :aria-hidden="isShowTools"></i>
          </li>
          <li class="markListItem" @click="previewAllFn" title="previewAll">
            <i class="fa fa-eye" :aria-hidden="isShowTools"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="mdBodyContainer" :class="{ noMenu: !navStatus }">
      <div class="editContainer" v-if="editStatus">
        <textarea name class="mdEditor" @keydown.9="tabFn" v-scroll="editScroll" v-model="input"></textarea>
      </div>
      <div class="previewContainer markdown-body" v-scroll="previewScroll" v-html="compiledMarkdown" v-if="previewStatus"></div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import range from "./rangeFn.js";
import marked from "marked";
import { reactive, toRefs, computed } from "vue";
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
  that.input = document.querySelector(".mdEditor").value;
};
export default {
  name: "chat-editor",
  props: [
    "mdValuesP",
    "fullPageStatusP",
    "editStatusP",
    "previewStatusP",
    "navStatusP",
    "icoStatusP"
  ],
  setup(props) {
    const state = reactive({
      isShowTools: true,
      input: props.mdValuesP || "",
      editStatus: Boolean(props.editStatusP),
      previewStatus: Boolean(props.previewStatusP),
      fullPageStatus: Boolean(props.fullPageStatusP),
      navStatus: Boolean(props.navStatusP),
      icoStatus: Boolean(props.icoStatusP),
      maxEditScrollHeight: 0,
      maxPreviewScrollHeight: 0
    });
    if (!state.editStatus && !state.previewStatus) {
      state.editStatus = true;
      state.previewStatus = true;
    }
    const tabFn = evt => {
      insertContent("    ", this);
      // 屏蔽屌tab切换事件
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    };
    const addImage = evt => {
      insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
    };
    const addHTitle = index => {
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
      insertContent(tmp, this);
    };
    const addCode = () => {
      let textareaDom = document.querySelector(".mdEditor");
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent("```\n\n```", this);
      if (lastChart != "\n" && value != "") {
        range.setCaretPosition(textareaDom, point + 5);
      } else {
        range.setCaretPosition(textareaDom, point + 4);
      }
    };
    const addStrikethrough = () => {
      let textareaDom = document.querySelector(".mdEditor");
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent("~~~~", this);
      if (lastChart != "\n" && value != "") {
        range.setCaretPosition(textareaDom, point + 3);
      } else {
        range.setCaretPosition(textareaDom, point + 2);
      }
    };
    const addStrong = () => {
      let textareaDom = document.querySelector(".mdEditor");
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent("****", this);
      if (lastChart != "\n" && value != "") {
        range.setCaretPosition(textareaDom, point + 3);
      } else {
        range.setCaretPosition(textareaDom, point + 2);
      }
    };
    const addItalic = () => {
      let textareaDom = document.querySelector(".mdEditor");
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent("**", this);
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
    const addLine = () => {
      insertContent("\n----\n", this);
    };
    const addLink = () => {
      insertContent("[Vue](https://cn.vuejs.org/images/logo.png)", this);
    };
    const addQuote = () => {
      let textareaDom = document.querySelector(".mdEditor");
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent("> ", this);
      if (lastChart != "\n" && value != "") {
        range.setCaretPosition(textareaDom, point + 3);
      } else {
        range.setCaretPosition(textareaDom, point + 2);
      }
    };
    const addTable = () => {
      insertContent("\nheader 1 | header 2\n", this);
      insertContent("---|---\n", this);
      insertContent("row 1 col 1 | row 1 col 2\n", this);
      insertContent("row 2 col 1 | row 2 col 2\n\n", this);
    };
    const addUl = () => {
      insertContent("* ", this);
    };
    const addOl = () => {
      insertContent("1. ", this);
    };
    const previewFn = () => {
      if (!state.editStatus) {
        state.editStatus = true;
        state.previewStatus = !state.previewStatus;
      } else {
        state.previewStatus = !state.previewStatus;
      }
    };
    const previewAllFn = () => {
      if (!state.editStatus && state.previewStatus) {
        state.editStatus = true;
        state.previewStatus = true;
      } else {
        state.editStatus = false;
        state.previewStatus = true;
      }
    };
    const fullPageFn = () => {
      state.fullPageStatus = !state.fullPageStatus;
      let maxEditScrollHeight =
        document.querySelector(".mdEditor").scrollHeight -
        document.querySelector(".mdEditor").clientHeight;
      let maxPreviewScrollHeight =
        document.querySelector(".previewContainer").scrollHeight -
        document.querySelector(".previewContainer").clientHeight;
      state.maxEditScrollHeight = maxEditScrollHeight;
      state.maxPreviewScrollHeight = maxPreviewScrollHeight;
    };
    const previewScroll = (e, position) => {
      if (state.maxEditScrollHeight !== 0) {
        let topPercent = position.scrollTop / state.maxPreviewScrollHeight;
        document.querySelector(".mdEditor").scrollTop =
          state.maxEditScrollHeight * topPercent;
      }
    };
    const editScroll = (e, position) => {
      if (state.maxPreviewScrollHeight !== 0) {
        let topPercent = position.scrollTop / state.maxEditScrollHeight;
        document.querySelector(".previewContainer").scrollTop =
          state.maxPreviewScrollHeight * topPercent;
      }
    };
    const happyDay = () => {
      window.open("https://github.com/ovenslove/vue-mdEditor");
    };
    const compiledMarkdown = computed(() => {
      return marked(state.input, {
        // sanitize: true
      });
    });
    return {
      ...toRefs(state),
      happyDay,
      addStrong,
      addItalic,
      addStrikethrough,
      addHTitle,
      addLine,
      addQuote,
      addCode,
      addLink,
      addImage,
      addTable,
      addUl,
      addOl,
      fullPageFn,
      previewFn,
      previewAllFn,
      editScroll,
      previewScroll,
      compiledMarkdown
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
      -khtml-user-select:none; /* you could also put this in a class */ 
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