<!--
 * @Author       : Eug
 * @Date         : 2021-11-23 12:10:46
 * @LastEditTime : 2022-02-11 14:34:23
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/user/index.vue
-->
<template>
  <div class="chat-user">
    <el-card shadow="never" class="chat-user-card border-0">
      <el-scrollbar ref="scrollbarRef" class="chat-user-card-container" always>
        <div
          class="message-item"
          v-for="msg in messageList"
          :class="`item-${msg.id}`"
          :key="msg.id"
        >
          <div v-if="isLogin && userInfo.user_id === msg.user_id" class="message-item-owen">
            <span class="publickStyle back">
              {{ msg.message }}
              <span class="timer-right">{{FormatTimerSecond(msg.create_time)}}</span>
            </span>
            <el-avatar style="margin-left:15px;">{{ msg.user_name }}</el-avatar>
          </div>
          <div v-else>
            <el-avatar style="margin-right:15px;">{{ msg.user_name }}</el-avatar>
            <span class="publickStyle emptyPub left">
              {{ msg.message }}
              <span class="timer-left">
                {{FormatTimerSecond(msg.create_time)}}
              </span>
            </span>
          </div>
        </div>
      </el-scrollbar>
      <div class="chat-user-input">
        <el-input :disabled="!isLogin" v-model.trim="sendMessage" :placeholder="!isLogin ? '请先登录': '说些什么...'">
          <template #append>
            <el-button :icon="Promotion" :disabled="!isLogin || !sendMessage" @click="useSend"></el-button>
          </template>
        </el-input>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { useUserStore } from "/@/store/User";
import { storeToRefs } from "pinia";
import io from "socket.io-client";
import { Promotion } from "@element-plus/icons";
import servers from "/@/server";
import { ElNotification } from "element-plus";
import utils from "/@/utils/index.js";

const { FormatTimerSecond } = utils;

const UserStore = useUserStore();
const { isLogin, userInfo } = storeToRefs(UserStore);

const messageList = ref([]);
const sendMessage = ref("");
const scrollbarRef = ref(null);
const isSendStatus = ref(false);
console.log(scrollbarRef);

const useGetMessageList = async () => {
  try {
    let res = await servers.SearchInformationAll();
    if (res.code === 200) {
      messageList.value.push(...res.result);
    } else {
      ElNotification({
        title: "警告",
        message: res.msg,
        type: "warning"
      });
    }
  } catch (error) {
    ElNotification({
      title: "错误",
      message: error,
      type: "error"
    });
  }
};
useGetMessageList();

const socket = io("http://47.93.229.170:3030", { transports: ["websocket"] });

const useToBottom = () => {
  const doms = document.querySelector(".el-scrollbar__wrap ");
  const top = doms.scrollTop + 40;
  doms.scrollTop = top;
  if (doms.scrollTop + doms.offsetHeight >= doms.scrollHeight) {
    return false;
  }
  requestAnimationFrame(useToBottom);
};

socket.on("message", msg => {
  messageList.value.push(msg);
  nextTick(() => {
    if (isSendStatus.value) {
      useToBottom()
      isSendStatus.value = false;
    }
  });
});

const useSend = () => {
  socket.emit("message", {
    message: sendMessage.value,
    user_id: userInfo.value.user_id
  });
  isSendStatus.value = true;
  nextTick(() => {
    sendMessage.value = "";
  });
};
</script>

<style lang="scss">
.chat-user {
  position: relative;

  &-card {
    min-height: calc(100vh - 150px);
    max-height: calc(100vh - 150px);
    padding-bottom: 100px;
    box-sizing: border-box;
    &-container {
      max-height: calc(100vh - 250px);
      overflow: scroll;
      box-sizing: border-box;
    }
  }

  &-input {
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .message-item {
    padding: 20px 10px;
    width: 100%;
    box-sizing: border-box;

    vertical-align: middle;
    .el-avatar {
      vertical-align: middle;
    }

    &-owen {
      text-align: right;
    }
  }
}

.publickStyle {
  display: inline-block;
  // min-width: 200px;
  max-width: 80%;
  border-radius: 15px;
  text-align: center;
  padding: 12px 20px 10px;
  box-sizing: border-box;
  position: relative;
  color: #000 !important;
}
.timer-right{
  position: absolute;
  right: 0px;
  width: 130px;
  color: #ccc;
  bottom: -20px;
}
.timer-left{
  position: absolute;
  width: 130px;
  color: #ccc;
  left: 0;
  bottom: -20px;
}
.back {
  background: #ccc;
  color: #fff;
}
.back::after {
  position: absolute;
  left: 100%;
  top: 50%;
  border: 5px solid transparent;
  border-left-color: #ccc;
  content: "";
  margin-top: -5px;
}
.emptyPub {
  // width: 196px;
  border: 2px solid #ccc;
  color: #ccc;
  margin-top: 20px;
}
.left::before {
  position: absolute;
  top: 50%;
  left: 0;
  border: 7px solid transparent;
  border-right-color: #ccc;
  content: "";
  margin-left: -16px;
  margin-top: -6px;
}
.left::after {
  position: absolute;
  top: 50%;
  left: 0;
  border: 6px solid transparent;
  border-right-color: #ccc;
  content: "";
  margin-left: -12px;
  margin-top: -5px;
}
</style>
