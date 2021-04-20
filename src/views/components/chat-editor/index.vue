<!--
 * @Author       : Eug
 * @Date         : 2021-03-12 16:28:04
 * @LastEditTime : 2021-04-20 15:40:44
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
        <textarea name class="mdEditor" @keydown.tab="useTabEvent" v-scroll="useEditScroll" v-model="value"></textarea>
      </div>
      <div class="previewContainer markdown-body" v-scroll="usePreviewScroll" v-html="useCompiledMarkdown" v-if="isShowPreview"></div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import marked from "marked";
import { toRefs, watch, defineComponent } from "vue";
import { useChatEditor, useChatEditorStates } from './useChatEditor'
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

export default defineComponent({
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
    const state = useChatEditorStates(props)
    const {
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
    } = useChatEditor(props, state, emit)
    
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

    return {
      ...toRefs(state),
      useTabEvent,
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
})
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