<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:22:48
 * @LastEditTime : 2021-11-30 14:20:38
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/TitleItem/index.vue
-->
<template >
  <div class="Title-container">
    <div class="Title-Item" v-for="Article in ArticleList" :key="Article.article_id" @click="useDetail(Article)">
      <p>
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
          <el-icon style="vertical-align: middle;">
            <View />
          </el-icon>
          <span style="vertical-align: middle;"> {{Article.page_views}} </span>
        </el-button>
        <el-button type="text" size="mini">
          <el-icon style="vertical-align: middle;">
            <chat-round />
          </el-icon>
          <span style="vertical-align: middle;"> 0 </span>
        </el-button>
        
        <!-- <el-icon>
          <chat-round />
        </el-icon> -->
      </div>
    </div>
    <template v-if="!isEnd">
      <LoadAnimation/>
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
    default: false
  }
});

const useDetail = (v) => {
  Router.push({
    name: 'detail',
    query: {
      id: v.article_id
    }
  })
}
</script>

<style lang="scss">
.Title-Item {
  padding: 20px;
  border-bottom: 1px solid #e5e6eb;
  cursor: pointer;

  &-title {
    margin: 10px 0;
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
    // vertical-align:middle;
    line-height: 100%;

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
}

</style>
