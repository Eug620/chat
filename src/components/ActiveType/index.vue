<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:22:48
 * @LastEditTime : 2021-11-22 12:31:43
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/ActiveType/index.vue
-->
<template>
  <div class="card-list" :key="idx" v-for="(type, idx) in articleTypes">
    <el-button
      type="text"
      class="card-list-button"
      :class="{'card-list-button-active': activeType === type.type}"
      @click="useChangeActiveType(type.type)"
    >{{type.title}}</el-button>
    <el-divider direction="vertical" v-if="idx+1 < articleTypes.length"></el-divider>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "/@/store/Home";

const HomeStore = useHomeStore();
const activeType = ref("hot");
const { articleTypes } = storeToRefs(HomeStore);
const useChangeActiveType = v => {
  activeType.value = v;
};
</script>

<style lang="scss">
.card-list {
  display: inline-block;
  
  .el-card__header {
    padding-top: 0;
    padding-bottom: 0;
  }
  .el-card__body {
    padding: 0;
  }
  &-button {
    color: #909090;
    font-weight: 400;

    &:hover {
      color: #007fff;
    }

    &-active {
      color: #007fff;
    }
  }
}
</style>
