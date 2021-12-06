<!--
 * @Author       : Eug
 * @Date         : 2021-12-06 17:43:15
 * @LastEditTime : 2021-12-06 19:51:40
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/DiscussionArea/index.vue
-->
<template>
  <div class="DiscussionArea" v-loading="comment_loading">
    <div v-if="comment.length">
      <div class="DiscussionArea-item" v-for="item in comment" :key="item.id">
        <div>
          <span class="DiscussionArea-item-user">{{item.user_name}}</span>
          <span class="DiscussionArea-item-time">{{FormatRelativeTime(item.create_time)}}</span>
        </div>
        <div class="DiscussionArea-item-content">{{item.content}}</div>
      </div>
    </div>
    <div>
      <el-input
        v-model="commentValue"
        :rows="2"
        type="textarea"
        class="DiscussionArea-textarea"
        placeholder="说些什么..."
      />
      <el-button
        :loading="create_comment"
        type="primary"
        :disabled="!isLogin || !commentValue"
        @click="useCommit"
      >{{!isLogin ? '请先登录' : '发布'}}</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import servers from "/@/server";
import { useUserStore } from "/@/store/User";
import { storeToRefs } from "pinia";
import utils from "/@/utils/index.js";

const UserStore = useUserStore();
const { isLogin, userInfo } = storeToRefs(UserStore);
const { FormatRelativeTime } = utils;

const Route = useRoute();
const comment = ref([]);
const comment_loading = ref(true);
const useGetComment = async () => {
  try {
    comment_loading.value = true;
    let res = await servers.GetCommentAll({
      article_id: Route.query.id
    });
    if (res.code === 200) {
      comment.value = res.result;
    } else {
      ElNotification({
        title: "警告",
        message: res.msg,
        type: "warning"
      });
    }
    comment_loading.value = false;
  } catch (error) {
    comment_loading.value = false;
    ElNotification({
      title: "错误",
      message: error,
      type: "error"
    });
  }
};
useGetComment();

const commentValue = ref("");
const create_comment = ref(false);
const useCommit = async () => {
  try {
    create_comment.value = true;
    let res = await servers.CreateComment({
      article_id: Route.query.id,
      pid: Route.query.id,
      content: commentValue.value,
      operator: userInfo.value.user_id
    });
    if (res.code === 200) {
      commentValue.value = "";
      ElNotification({
        title: "成功",
        message: "评论成功",
        type: "success"
      });
      useGetComment();
    } else {
      ElNotification({
        title: "警告",
        message: res.result.msg,
        type: "warning"
      });
    }
    create_comment.value = false;
  } catch (error) {
    create_comment.value = false;
    ElNotification({
      title: "错误",
      message: error,
      type: "error"
    });
  }
};
</script>

<style lang="scss">
.DiscussionArea {
  margin-top: 20px;

  &-textarea {
    margin: 10px 0;
  }

  &-item {
    margin: 10px 0;
    padding: 20px;
    position: relative;
    border: 1px solid #ccc;
    cursor: pointer;

    &-user {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    &-time {
      color: #ccc;
    }
    &-content {
      padding-left: 20px;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      transition: 0.3s ease-in-out;
    }

    &::before {
      top: -5px;
      left: -5px;
      border-top: 1px solid #03a9f3;
      border-left: 1px solid #03a9f3;
    }

    &::after {
      right: -5px;
      bottom: -5px;
      border-bottom: 1px solid #03a9f3;
      border-right: 1px solid #03a9f3;
    }

    &:hover::before,
    &:hover::after {
      width: calc(100% + 9px);
      height: calc(100% + 9px);
    }
  }
}
</style>