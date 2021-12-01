<!--
 * @Author       : Eug
 * @Date         : 2021-11-30 14:24:18
 * @LastEditTime : 2021-11-30 15:10:57
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/RightViews/PropsInformation.vue
-->
<template>
  <el-card shadow="never" class="PropsInformation">
    <el-divider content-position="left">{{ props.PropsInformationInfo.title }}</el-divider>
    <el-progress
      :text-inside="true"
      :stroke-width="12"
      type="line"
      :percentage="useTops"
      status="success"
      class="PropsInformation-progress"
    >
    </el-progress>
    <el-descriptions :column="1" size="mini" border direction="vertical">
      <el-descriptions-item
        v-for="(version, name) in props.PropsInformationInfo.information"
        :key="name"
      >
        <template #label>{{name}}</template>
        {{version}}
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup>
import { inject } from "vue";
const useTops = inject("useTops");
const props = defineProps({
  PropsInformationInfo: {
    type: Object,
    default: {
      title: "Props Information",
      information: {}
    }
  }
});
</script>

<style lang="scss">
.PropsInformation {
  margin-top: 10px;
  &-progress{
    margin-bottom: 10px;
  }
}
</style>