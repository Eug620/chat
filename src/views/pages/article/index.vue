<!--
 * @Author       : Eug
 * @Date         : 2021-04-02 11:15:41
 * @LastEditTime : 2021-04-02 14:22:36
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/article/index.vue
-->
<template>
  <chat-container>
    <div class="bg-white mb-8 mt-4">
      <div class="grid grid-cols-1 ">
        <div
          :style="{backgroundImage: `url(${background})`, zIndex:0}"
          class="relative z-0 px-4 pt-40 pb-3 bg-fixed from-black bg-cover"
        >
          <h2
            class="text-xl font-semibold text-white"
          >{{detail.article_title}}</h2>
          <p class="text-sm font-medium text-white">{{detail.author}}</p>
          <p class="text-sm font-medium text-white ">{{detail.article_describe}}</p>
        </div>
        <div class="col-start-1 row-start-2 px-4 sm:pb-16">
          <div class="flex items-center  font-medium my-5 ">
            <svg t="1617337447404" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1722" width="24" height="24"><path d="M511.962 274.837c169.275 0 314.963 99.275 383.15 242.588h66.438C889.625 339.713 715.563 214.25 511.963 214.25c-203.463 0-377.5 125.5-449.5 303.188h66.4c68.225-143.313 213.887-242.6 383.1-242.6z m0 485.226c-169.212 0-314.875-99.313-383.087-242.625H62.463c72 177.812 246.037 303.312 449.5 303.312 203.587 0 377.65-125.5 449.587-303.313h-66.425C826.937 660.75 681.25 760.063 511.962 760.063zM350.275 517.438c0 89.5 72.4 161.875 161.713 161.875s161.687-72.375 161.687-161.875c0-89.275-72.375-161.688-161.688-161.688s-161.712 72.4-161.712 161.688z m262.85 0c0 55.837-45.337 101.125-101.125 101.125-55.837 0-101.025-45.275-101.025-101.125 0-55.75 45.188-101.063 101.025-101.063 55.775 0 101.125 45.313 101.125 101.063z" fill="#515151" p-id="1723"></path></svg>
            <div class="ml-1">
              <span class="text-black">{{detail.page_views}}</span>
            </div>
          </div>
          <div class="flex items-center  font-medium my-5 ">
            <svg t="1617337585097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3069" width="24" height="24"><path d="M512 797.502429c-11.256368 0-20.363793 9.107425-20.363793 20.363793s9.107425 20.363793 20.363793 20.363793 20.363793-9.107425 20.363793-20.363793C532.466124 806.712185 523.256368 797.502429 512 797.502429M369.248785 759.333108c-9.721409-5.628184-22.205745-2.251274-27.833929 7.470135-5.628184 9.82374-2.251274 22.205745 7.470135 27.833929s22.205745 2.251274 27.833929-7.470135S378.970194 764.961292 369.248785 759.333108M257.196757 341.312526c-9.721409-5.628184-22.205745-2.251274-27.936259 7.470135-5.628184 9.721409-2.251274 22.205745 7.470135 27.833929s22.205745 2.251274 27.833929-7.470135C270.295076 359.425046 267.020496 346.94071 257.196757 341.312526M654.853545 264.666892c9.721409 5.628184 22.205745 2.251274 27.833929-7.470135 5.628184-9.82374 2.251274-22.205745-7.470135-27.833929s-22.205745-2.251274-27.833929 7.470135C641.755226 246.554372 645.029806 259.038708 654.853545 264.666892M206.031447 491.533876c-11.256368 0-20.363793 9.107425-20.363793 20.363793s9.107425 20.363793 20.363793 20.363793 20.363793-9.107425 20.363793-20.363793C226.39524 500.743632 217.287815 491.533876 206.031447 491.533876M236.832963 647.281079c-9.721409 5.628184-13.098319 18.11252-7.470135 27.833929s18.11252 13.098319 27.936259 7.470135c9.721409-5.628184 13.098319-18.11252 7.470135-27.833929C259.038708 645.029806 246.554372 641.652895 236.832963 647.281079M348.782661 229.260497c-9.721409 5.628184-13.098319 18.11252-7.470135 27.833929s18.11252 13.098319 27.833929 7.470135 13.098319-18.11252 7.470135-27.833929C371.090736 227.009224 358.606401 223.632313 348.782661 229.260497M766.803243 341.312526c-9.721409 5.628184-13.098319 18.11252-7.470135 27.833929s18.11252 13.098319 27.833929 7.470135 13.098319-18.11252 7.470135-27.833929C789.008988 339.061252 776.626983 335.684342 766.803243 341.312526M817.968553 491.533876c-11.256368 0-20.363793 9.107425-20.363793 20.363793s9.107425 20.363793 20.363793 20.363793 20.363793-9.107425 20.363793-20.363793C838.434677 500.743632 829.224922 491.533876 817.968553 491.533876M512 63.177901c-247.844761 0-448.822099 200.977337-448.822099 448.822099s200.875007 448.822099 448.822099 448.822099c247.844761 0 448.822099-200.875007 448.822099-448.822099C960.822099 264.155239 759.844761 63.177901 512 63.177901M512 919.889851c-225.332025 0-407.992181-182.660156-407.992181-407.992181s182.660156-407.889851 407.992181-407.889851 407.992181 182.660156 407.992181 407.992181S737.332025 919.889851 512 919.889851M654.853545 759.333108c-9.721409 5.628184-13.098319 18.11252-7.470135 27.833929s18.11252 13.098319 27.833929 7.470135 13.098319-18.11252 7.470135-27.833929C677.05929 756.979504 664.574954 753.704924 654.853545 759.333108M695.581132 491.533876l-104.888885 0c-7.470135-28.447912-29.77821-50.960649-58.328453-58.328453l0-227.276307c0-11.256368-9.107425-20.363793-20.363793-20.363793s-20.363793 9.107425-20.363793 20.363793l0 227.276307c-35.099403 9.107425-61.193711 40.727587-61.193711 78.692247 0 45.127803 36.532031 81.557504 81.557504 81.557504 37.96466 0 69.584821-26.094308 78.692247-61.193711l104.888885 0c11.256368 0 20.363793-9.107425 20.363793-20.363793C716.047256 500.743632 706.8375 491.533876 695.581132 491.533876M512 552.727587c-22.512736 0-40.829917-18.21485-40.829917-40.829917 0-22.512736 18.21485-40.829917 40.829917-40.829917 22.512736 0 40.829917 18.317181 40.829917 40.829917C552.829917 534.512736 534.512736 552.727587 512 552.727587M787.167037 647.281079c-9.721409-5.628184-22.205745-2.251274-27.833929 7.470135s-2.251274 22.205745 7.470135 27.833929 22.205745 2.251274 27.833929-7.470135S796.990776 652.909264 787.167037 647.281079" p-id="3070"></path></svg>
            <div class="ml-1">
              <span>{{lib.FormatTimer(detail.create_time)}}</span>
            </div>
          </div>
          <hr class="w-16 border-gray-300 hidden" />
        </div>
        <div class="col-start-1 row-start-3 space-y-3 px-4">
          <div class="previewContainer markdown-body"  v-html="marked(detail.article_content,{})"></div>
        </div>
      </div>
    </div>
  </chat-container>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import { toRefs, getCurrentInstance } from "vue";
import { useStates, useArticle } from "./useState";
import lib from '/@/lib'
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
export default {
  name: "ArticleDetail",
  setup(props, ctx) {
    const state = useStates(props);
    state.currentVM = getCurrentInstance().proxy;
    const { useGetArticleDetail, useGetBackground } = useArticle(props, state, ctx);
    useGetArticleDetail();
    useGetBackground()
    return {
      ...toRefs(state),
      lib,
      marked
    };
  }
};
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