<!--
 * @Author       : Eug
 * @Date         : 2021-03-12 16:28:04
 * @LastEditTime : 2021-03-15 10:53:50
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/components/chat-editor/index.vue
-->
<template>
  <div class="mdContainer" :class="{ fullPage: fullPageStatus }">
    <div class="navContainer" v-if="navStatus">
      <div class="nameContainer" v-if="icoStatusP" @click="happyDay">OVEN-mdEditor</div>
      <div class="markContainer">
        <ul class="markListGroup">
          <li class="markListItem" @click="addStrong" title="strong">
            <b>B</b>
          </li>
          <li class="markListItem" @click="addItalic" title="italic">
            <i>I</i>
          </li>
          <li class="markListItem" @click="addStrikethrough" title="strikethrough">
            <i class="fa fa-strikethrough" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="addHTitle(1)" title="H1-title">H1</li>
          <li class="markListItem" @click="addHTitle(2)" title="H2-title">H2</li>
          <li class="markListItem" @click="addHTitle(3)" title="H3-title">H3</li>
          <li class="markListItem" @click="addHTitle(4)" title="H4-title">H4</li>
          <li class="markListItem" @click="addHTitle(5)" title="H5-title">H5</li>
          <li class="markListItem" @click="addHTitle(6)" title="H6-title">H6</li>
          <li class="markListItem" @click="addLine" title="line">一</li>
          <li class="markListItem" @click="addQuote" title="quote">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="addCode">
            <i class="fa fa-code" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="addLink">
            <i class="fa fa-link" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="addImage">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="addTable" title="table">
            <i class="fa fa-table" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="addUl" title="ul-list">
            <i class="fa fa-list-ul" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="addOl" title="ol-list">
            <i class="fa fa-list-ol" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="fullPageFn" title="fullpage">
            <i class="fa fa-arrows-alt" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="previewFn" title="preview">
            <i class="fa fa-eye-slash" aria-hidden="true"></i>
          </li>
          <li class="markListItem" @click="previewAllFn" title="previewAll">
            <i class="fa fa-eye" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="mdBodyContainer" :class="{ noMenu: !navStatus }">
      <div class="editContainer" v-if="editStatus">
        <textarea name class="mdEditor" @keydown.9="tabFn" v-scroll="editScroll" v-model="input"></textarea>
      </div>
      <div
        class="previewContainer markdown-body"
        v-scroll="previewScroll"
        v-html="compiledMarkdown"
        v-if="previewStatus"
      ></div>
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
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: (code) =>{
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
}
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
    const tabFn = (evt) => {
      insertContent("    ", this);
      // 屏蔽屌tab切换事件
      if (evt.preventDefault) {
          evt.preventDefault();
      } else {
          evt.returnValue = false;
      }
    }
    const addImage = (evt) => {
        insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
    }
    const addHTitle = (index) => {
      let tmp = '';
      switch (index) {
        case 1:
            tmp = '# ';
            break;
        case 2:
            tmp = '## ';
            break;
        case 3:
            tmp = '### ';
            break;
        case 4:
            tmp = '#### ';
            break;
        case 5:
            tmp = '##### ';
            break;
        case 6:
            tmp = '###### ';
            break;
        default:
            break;
      }
      insertContent(tmp, this);
    }
    const addCode = () => {
      let textareaDom = document.querySelector('.mdEditor');
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent('```\n\n```', this);
      if (lastChart != '\n' && value != '') {
        range.setCaretPosition(textareaDom, point + 5);
      } else {
        range.setCaretPosition(textareaDom, point + 4);
      }
    }
    const addStrikethrough = () => {
      let textareaDom = document.querySelector('.mdEditor');
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent('~~~~', this);
      if (lastChart != '\n' && value != '') {
        range.setCaretPosition(textareaDom, point + 3);
      } else {
        range.setCaretPosition(textareaDom, point + 2);
      }
    }
    const addStrong = () => {
      let textareaDom = document.querySelector('.mdEditor');
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent('****', this);
      if (lastChart != '\n' && value != '') {
        range.setCaretPosition(textareaDom, point + 3);
      } else {
        range.setCaretPosition(textareaDom, point + 2);
      }
    }
    const addItalic = () => {
      let textareaDom = document.querySelector('.mdEditor');
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent('**', this);
      if (lastChart != '\n' && value != '') {
        range.setCaretPosition(textareaDom, point + 2);
      } else {
        range.setCaretPosition(textareaDom, point + 1);
      }
    }
    const setStrong = () => {
      let textareaDom = document.querySelector('.mdEditor');
      let point = range.getCursortPosition(textareaDom);
    }
    const addLine = () => {
      insertContent('\n----\n', this);
    }
    const addLink = () => {
      insertContent("[Vue](https://cn.vuejs.org/images/logo.png)", this);
    }
    const addQuote = () => {
      let textareaDom = document.querySelector('.mdEditor');
      let value = textareaDom.value;
      let point = range.getCursortPosition(textareaDom);
      let lastChart = value.substring(point - 1, point);
      insertContent('> ', this);
      if (lastChart != '\n' && value != '') {
        range.setCaretPosition(textareaDom, point + 3);
      } else {
        range.setCaretPosition(textareaDom, point + 2);
      }
    }
    const addTable = () => {
      insertContent('\nheader 1 | header 2\n', this);
      insertContent('---|---\n', this);
      insertContent('row 1 col 1 | row 1 col 2\n', this);
      insertContent('row 2 col 1 | row 2 col 2\n\n', this);
    }
    const addUl = () => {
      insertContent('* ', this);
    }
    const addOl = () => {
      insertContent('1. ', this);
    }
    const previewFn = () => {
      if (!state.editStatus) {
        state.editStatus = true;
        state.previewStatus = !state.previewStatus;
      } else {
        state.previewStatus = !state.previewStatus;
      }
    }
    const previewAllFn = () => {
      if (!state.editStatus && state.previewStatus) {
        state.editStatus = true;
        state.previewStatus = true;
      } else {
        state.editStatus = false;
        state.previewStatus = true;
      }
    }
    const fullPageFn = () => {
      state.fullPageStatus = !state.fullPageStatus;
      let maxEditScrollHeight=document.querySelector('.mdEditor').scrollHeight-document.querySelector('.mdEditor').clientHeight;
      let maxPreviewScrollHeight=document.querySelector('.previewContainer').scrollHeight-document.querySelector('.previewContainer').clientHeight;
      state.maxEditScrollHeight = maxEditScrollHeight
      state.maxPreviewScrollHeight = maxPreviewScrollHeight
    }
    const previewScroll = (e, position) => {
      if(state.maxEditScrollHeight!==0){
        let topPercent=position.scrollTop/state.maxPreviewScrollHeight;
        document.querySelector('.mdEditor').scrollTop = state.maxEditScrollHeight*topPercent;
      }
    }
    const editScroll = (e, position) => {
      if(state.maxPreviewScrollHeight!==0){
        let topPercent=position.scrollTop/state.maxEditScrollHeight;
        document.querySelector('.previewContainer').scrollTop = state.maxPreviewScrollHeight*topPercent;
      }
    }
    const happyDay = () => {
      window.open('https://github.com/ovenslove/vue-mdEditor');
    }
    const compiledMarkdown = computed(() => {
      return marked(state.input, {
          sanitize: true
      })
    })
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
};
</script>

<style>
</style>