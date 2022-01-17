<!--
 * @Author       : Eug
 * @Date         : 2021-12-01 11:43:44
 * @LastEditTime : 2022-01-17 15:46:28
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/RightViews/UserInformation.vue
-->
<template>
  <el-card shadow="never" class="UserInformation border-0">
    <template v-if="!isLogin">
      <el-radio-group
        v-model="formType"
        size="small"
        style="text-align:center;padding: 10px;display:block;"
      >
        <el-radio-button label="login">登录</el-radio-button>
        <el-radio-button label="register">注册</el-radio-button>
      </el-radio-group>
    </template>
    <el-divider content-position="left" v-else>{{ isLogin ? '已登录' : '请登录' }}</el-divider>
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
            @keydown="useKeydown($event, refUserPassword)"
            ref="refUserName"
            prefix-icon="avatar"
            v-model.trim="userForm.user_name"
            :placeholder="formType === 'register' ? '请输入账户' : '测试账户: admin'"
          ></el-input>
        </el-form-item>
        <el-form-item prop="user_password">
          <el-input
            @keydown="useKeydown($event, formType === 'register' ? refUserEmail : null)"
            ref="refUserPassword"
            prefix-icon="lock"
            v-model.trim="userForm.user_password"
            :placeholder="formType === 'register' ? '请输入密码' : '测试密码: admin'"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="user_email" v-if="formType === 'register'">
          <el-input
            @keydown="useKeydown($event)"
            ref="refUserEmail"
            prefix-icon="message"
            v-model.trim="userForm.user_email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
        <el-button size="mini" type="info" style="width: 100%;" @click="useValidate">{{formType === 'register' ? '注册' : '登录'}}</el-button>
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
import { SwitchButton } from "@element-plus/icons";
import utils from "/@/utils/index.js";
const { FormatTimerSecond } = utils;

const UserStore = useUserStore();
const { isLogin, userInfo } = storeToRefs(UserStore);

const useCompUserInfo = computed(() => {
  return {
    名称: userInfo.value.user_name || "",
    邮箱: userInfo.value.user_email || "",
    创建时间: FormatTimerSecond(userInfo.value.create_time) || "",
    编辑时间: FormatTimerSecond(userInfo.value.update_time) || ""
  };
});
const userForm = reactive({
  user_name: "",
  user_password: "",
  user_email: "",
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
    ],
    user_email: [
      {
        type: "email",
        required: true,
        message: "请检查邮箱格式",
        trigger: "blur"
      }
    ]
  }
});
const formType = ref("login");
const refUserName = ref(null);
const refUserPassword = ref(null);
const refUserEmail = ref(null);
const refUserForm = ref(null);
const mergeProps = () => {
  const { user_name, user_password, user_email } = userForm;
  return {
    user_name,
    user_password,
    user_email
  };
};
const useLogin = async () => {
  try {
    let res = await servers.Login(mergeProps());
    if (res.code === 200) {
      UserStore.saveUserInfo({ ...res.result.data, token: res.token });
      UserStore.refreshUserInfo();
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

const useRegister = async () => {
  try {
    let res = await servers.CreateUser(mergeProps());
    if (res.code === 200) {
      ElNotification({
        title: "成功",
        message: "注册成功",
        type: "success"
      });
      formType.value = "login";
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
const useValidate = () => {
  refUserForm.value.validate(v => {
    if (v) {
      if (formType.value === "register") {
        useRegister();
      } else {
        useLogin();
      }
    } else {
      ElNotification({
        title: "警告",
        message: "请检查填写内容",
        type: "warning"
      });
    }
  });
};

const useKeydown = (event, ref) => {
  if (event.keyCode === 13) {
    if (ref) {
      ref.focus();
    } else {
      useValidate()
    }
  }
};

const useLogout = () => {
  UserStore.cleanUserInfo();
  UserStore.refreshUserInfo();
};
</script>

<style>
.UserInformation {
  margin-bottom: 10px;
}
</style>