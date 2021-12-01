<!--
 * @Author       : Eug
 * @Date         : 2021-12-01 11:43:44
 * @LastEditTime : 2021-12-01 14:51:24
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/RightViews/UserInformation.vue
-->
<template>
  <el-card shadow="never" class="UserInformation">
    <el-divider content-position="left">{{ isLogin ? '已登录' : '请登录' }}</el-divider>
    <template v-if="isLogin">
      <el-descriptions :column="1" size="mini" border>
        <el-descriptions-item v-for="(version, name) in useCompUserInfo" :key="name">
          <template #label>{{name}}</template>
          {{version}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>退出登录</template>
          <el-button size="mini" type="text" :icon="SwitchButton" @click="useLogout"></el-button>
        </el-descriptions-item>
      </el-descriptions>
    </template>
    <template v-else>
      <el-form ref="refUserForm" :rules="userForm.rules" :model="userForm" size="small">
        <el-form-item prop="user_name">
          <el-input
            @keydown="useKeydown($event, true)"
            ref="refUserName"
            prefix-icon="avatar"
            v-model="userForm.user_name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="user_password">
          <el-input
            @keydown="useKeydown($event)"
            ref="refUserPassword"
            prefix-icon="lock"
            v-model="userForm.user_password"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
    </template>
  </el-card>
</template>

<script setup>
import { useUserStore } from "/@/store/User";
import { storeToRefs } from "pinia";
import { reactive, ref, computed } from "vue";
import servers from "/@/server";
import { ElNotification } from "element-plus";
import { SwitchButton } from '@element-plus/icons'
import utils from "/@/utils/index.js";
const { FormatTimerSecond } = utils;

const UserStore = useUserStore();
const { isLogin, userInfo } = storeToRefs(UserStore);

const useCompUserInfo = computed(() => {
  return {
    '名称': userInfo.value.user_name || '',
    '邮箱': userInfo.value.user_email || '',
    '创建时间': FormatTimerSecond(userInfo.value.create_time) || '',
    '编辑时间': FormatTimerSecond(userInfo.value.update_time) || ''
  }
})
const userForm = reactive({
  user_name: "",
  user_password: "",
  rules: {
    user_name: [
      {
        required: true,
        message: "账号为必填项",
        trigger: "blur"
      }
    ],
    user_password: [
      {
        required: true,
        message: "密码为必填项",
        trigger: "blur"
      }
    ]
  }
});
const refUserName = ref(null);
const refUserPassword = ref(null);
const refUserForm = ref(null);
const mergeProps = () => {
  const { user_name, user_password } = userForm;
  return {
    user_name,
    user_password
  };
};
const useLogin = async () => {
  try {
    let res = await servers.Login(mergeProps());
    if (res.code === 200) {
      UserStore.saveUserInfo(res.result.data)
      UserStore.refreshUserInfo()
      ElNotification({
        title: "欢迎~",
        message: "登录成功",
        type: "success"
      });
    } else {
      ElNotification({
        title: "警告",
        message: res.result.msg,
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

const useKeydown = (event, isName) => {
  if (event.keyCode === 13) {
    if (isName) {
      refUserPassword.value.focus();
    } else {
      refUserForm.value.validate(v => {
        if (v) {
          useLogin();
        } else {
          ElNotification({
            title: "警告",
            message: "请检查填写内容",
            type: "warning"
          });
        }
      });
    }
  }
};

const useLogout = () => {
  UserStore.cleanUserInfo()
  UserStore.refreshUserInfo()
}
</script>

<style>
.UserInformation {
  margin-bottom: 10px;
}
</style>