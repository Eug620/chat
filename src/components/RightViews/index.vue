<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:22:48
 * @LastEditTime : 2022-01-04 15:17:35
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/RightViews/index.vue
-->
<template>
  <el-affix class="chat-home-right-views" :offset="useOffset">
    <!-- 用户信息 -->
    <UserInformation v-if="isShowUserInformation"/>
    <!-- 项目信息 -->
    <ProjectInformation v-if="isShowProjectInformation"/>
    <!-- 系统信息 -->
    <SystemInformation v-if="isShowSystemInformation"/>
    <!-- 自定义信息 -->
    <PropsInformation v-if="isShowPropsInformation" :PropsInformationInfo="PropsInformationInfo"/>
  </el-affix>
</template>

<script setup>
import { inject, computed, nextTick } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "/@/store/Home";
import ProjectInformation from './ProjectInformation.vue'
import SystemInformation from './SystemInformation.vue'
import PropsInformation from './PropsInformation.vue'
import UserInformation from './UserInformation.vue'
const props = defineProps({
  isShowProjectInformation: {
    type: Boolean,
    default: false
  },
  isShowUserInformation: {
    type: Boolean,
    default: false
  },
  isShowSystemInformation: {
    type: Boolean,
    default: false
  },
  isShowPropsInformation: {
    type: Boolean,
    default: false
  },
  PropsInformationInfo: {
    type: Object
  },
});
const HomeStore = useHomeStore();
const {
  classificationHeight,
  getTopHeightSum
} = storeToRefs(HomeStore);
const useIsShow = inject('useIsShow')


const useOffset = computed(() => {
  return useIsShow.value ? classificationHeight.value + 10 : getTopHeightSum.value + 10
})


</script>

<style lang="scss">
.chat-home-right-views{
  .el-affix--fixed{
    transition:  0.3s all ease;
  }

  &-search{
    .el-input__inner {
      border: none;
      background-color: #f4f5f5;
    }
  }

  .el-collapse {
    border-top: none;
  }
  .el-collapse-item__wrap,
  .el-collapse-item__header {
    border-bottom: none;
  }
}
</style>
