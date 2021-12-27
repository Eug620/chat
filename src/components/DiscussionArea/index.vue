<!--
 * @Author       : Eug
 * @Date         : 2021-12-06 17:43:15
 * @LastEditTime : 2021-12-27 17:56:25
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/DiscussionArea/index.vue
-->
<template>
  <div class="DiscussionArea" v-loading="comment_loading">
    <el-button type="text" size="mini" @click="useCommenUser" class="DiscussionArea-item-content-call-commen">回复作者</el-button>
    <div class="DiscussionArea-item" v-for="item in comment" :key="item.id" >
      <div>
        <span class="DiscussionArea-item-user">{{item.operator_name}}</span>
        <span class="DiscussionArea-item-time">{{FormatRelativeTime(item.create_time)}}</span>
        <span class="DiscussionArea-item-commen" v-if="item.children.length">{{item.children.length}}条评论</span>
      </div>
      <div class="DiscussionArea-item-content" :class="{'DiscussionArea-item-own': isLogin && (item.operator === userInfo.user_id)}">{{item.content}}</div>
      <div class="DiscussionArea-item-content-call">
        <el-button type="text" size="mini" class="DiscussionArea-item-content-call-show" @click="() => item.isShowChildren = !item.isShowChildren" v-if="item.children.length">{{item.isShowChildren ? '收起评论' : '查看评论'}}</el-button>
        <el-button type="text" size="mini" @click="useCommen(item, true)" class="DiscussionArea-item-content-call-commen">回复</el-button>
      </div>
      <el-collapse-transition>
        <div style="margin-top:20px;" v-show="item.children.length && item.isShowChildren">
          <div class="DiscussionArea-inner" v-for="inner in item.children" :key="inner.id">
            <div>
              <span class="DiscussionArea-item-user">{{inner.operator_name}}</span>
              <span class="DiscussionArea-item-call">回复</span>
              <span class="DiscussionArea-item-user">{{inner.comment_name}}</span>
              <span class="DiscussionArea-item-time">{{FormatRelativeTime(inner.create_time)}}</span>
            </div>
            <div class="DiscussionArea-item-content" :class="{'DiscussionArea-item-own': isLogin && (inner.operator === userInfo.user_id)}">{{inner.content}}</div>
            <div class="DiscussionArea-item-content-call">
              <el-button type="text" size="mini" @click="useCommen(inner)" class="DiscussionArea-item-content-call-commen">回复</el-button>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <el-input v-model="commentValue" placeholder="说些什么...">
      <template #prepend>{{isLogin ? `${userInfo.user_name} 回复 ${tname}` : '请登录'}}</template>
      <template #append>
        <el-button :icon="Promotion"  :disabled="!isLogin || !commentValue" @click="useCommit"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import servers from "/@/server";
import { useUserStore } from "/@/store/User";
import { storeToRefs } from "pinia";
import utils from "/@/utils/index.js";
import { Promotion } from '@element-plus/icons'
const UserStore = useUserStore();
const { isLogin, userInfo } = storeToRefs(UserStore);
const { FormatRelativeTime } = utils;

const Route = useRoute();
const comment = ref([]);
const comment_loading = ref(true);

const props = defineProps({
  userProps: Object
})
const useGetComment = async () => {
  try {
    comment_loading.value = true;
    let res = await servers.GetCommentAll({
      article_id: Route.query.id
    });
    if (res.code === 200) {
      comment.value = res.result.map(item => {
        item['isShowChildren'] = false
        return item
      });
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


const pid = ref(Route.query.id)
const tid = ref(props.userProps.id)
const tname = ref(props.userProps.name)

watch(() => props.userProps, v => {
  useCommenUser()
}, { deep: true })
const useCommenUser = () => {
  pid.value = Route.query.id
  tid.value = props.userProps.id
  tname.value = props.userProps.name
}
const useCommen = (val, isChildren) => {
  if (isChildren) {
    pid.value = val.id
  } else {
    pid.value = val.pid
  }
  tid.value = val.operator
  tname.value = val.operator_name
}

const commentValue = ref("");
const create_comment = ref(false);
const useCommit = async () => {
  try {
    create_comment.value = true;
    let res = await servers.CreateComment({
      article_id: Route.query.id,
      pid: pid.value,
      tid: tid.value,
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
  &-inner{
    position: relative;
    margin-left: 20px;
    padding: 20px;
    background-color: rgba(247,248,250,.7);
  }

  &-item {
    margin: 10px 0;
    padding: 20px;
    position: relative;
    border: 1px solid #ccc;
    cursor: pointer;

    &-own {
      color: #409eff;
    }

    &-user {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      color: #252933;
    }
    &-call {
      color: #8a919f;
      margin-right: 10px;
    }
    &-time {
      color: #ccc;
    }
    &-commen {
      color: #ccc;
      margin-left: 10px;
    }

    &-content {
      padding-top: 10px;
      padding-left: 20px;
      font-style: italic;
      // text-decoration: underline;

      &-call{
        text-align: right;

        &-show {
          font-weight: normal;
          color: #909399;
        }
        &-commen{
          font-weight: normal;
          color: #909399;

        }
      }
    }

    // &::before,
    // &::after {
    //   content: "";
    //   position: absolute;
    //   width: 20px;
    //   height: 20px;
    //   transition: 0.3s ease-in-out;
    // }

    // &::before {
    //   top: -5px;
    //   left: -5px;
    //   border-top: 1px solid #03a9f3;
    //   border-left: 1px solid #03a9f3;
    // }

    // &::after {
    //   right: -5px;
    //   bottom: -5px;
    //   border-bottom: 1px solid #03a9f3;
    //   border-right: 1px solid #03a9f3;
    // }

    // &:hover::before,
    // &:hover::after {
    //   width: calc(100% + 9px);
    //   height: calc(100% + 9px);
    // }
  }
}
</style>