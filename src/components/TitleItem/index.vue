<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:22:48
 * @LastEditTime : 2021-12-03 16:47:42
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/TitleItem/index.vue
-->
<template >
  <div class="Title-container">
    <div
      class="Title-Item"
      v-for="(Article, index) in ArticleList"
      :key="Article.article_id"
      @click="useDetail(Article)"
    >
      <div :class="`Title-Item-index Title-Item-index-${index}`" v-if="isShowIndex">{{index + 1}}</div>
      <div class="Title-Item-container">
        <p v-if="!isShowIndex" style="margin-bottom:10px;">
          {{ Article.author }}
          <el-divider direction="vertical"></el-divider>
          {{ FormatTimerSecond(Article.create_time) }}
          <!-- <el-divider direction="vertical"></el-divider> -->
          <!-- {{ Article.tag_list.join(' · ') }} -->
        </p>
        <div class="Title-Item-title">{{ Article.article_title }}</div>
        <div class="Title-Item-description">{{ Article.article_describe }}</div>
        <div class="Title-Item-icons">
          <el-button type="text" size="mini">
            <el-icon>
              <View />
            </el-icon>
            <span>{{Article.page_views}}</span>
          </el-button>
          <el-button type="text" size="mini">
            <el-icon>
              <chat-round />
            </el-icon>
            <span>0</span>
          </el-button>
        </div>
      </div>
      <div class="Title-Item-image" v-if="isShowImage">
        <el-image
        style="width: 100px; height: 100px"
        :src="url"
        fit="fill"
      ></el-image>
      </div>
    </div>
    <template v-if="!isEnd">
      <LoadAnimation />
    </template>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
import utils from "/@/utils/index.js";
import { useRouter } from "vue-router";
const Router = useRouter();
const { FormatTimerSecond } = utils;
const props = defineProps({
  ArticleList: {
    type: Array,
    default: []
  },
  isEnd: {
    type: Boolean,
    default: true
  },
  isShowIndex: {
    type: Boolean,
    default: false
  },
  isShowImage: {
    type: Boolean,
    default: false
  }
});
const url ='https://pic2.zhimg.com/80/v2-013b89857315860d676fbff4029e3369_400x224.png'

const useDetail = v => {
  Router.push({
    name: "detail",
    query: {
      id: v.article_id
    }
  });
};
</script>

<style lang="scss">
.Title-Item {
  padding: 20px;
  border-bottom: 1px solid #e5e6eb;
  cursor: pointer;
  color: #86909c;
  position: relative;
  display: flex;

  &-index {
    width: 40px;
    font-size: 22px;
  }
  &-container {
    flex: 1
  }

  &-image {
    width: 100px;
  }

  &-title {
    margin-bottom: 10px;;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  &-description {
    margin: 10px 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: #86909c;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  &-icons {
    vertical-align: middle;
    line-height: 100%;

    .el-button[type="button"],
    .el-icon {
      vertical-align: middle !important;
      color: #86909c;
    }

    .el-icon {
      margin-left: 20px;
      &:first-child {
        margin-left: 0px;
      }
    }
  }

  &:hover {
    background-color: #fafafa;
  }
  &:after {
    content: '.';
    height: 0;
    display: block;
    clear: both;
}
}
</style>
