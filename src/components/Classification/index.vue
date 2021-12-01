<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:22:48
 * @LastEditTime : 2021-11-23 12:14:39
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/Classification/index.vue
-->
<template>
  <el-button
    v-for="options in classificationOptions"
    :key="options.type"
    type="text"
    class="chat-container-header-classification-button"
    :class="{'chat-container-header-classification-button-active': activeClassification === options.type}"
    @click="useChangeActiveClassification(options)"
  >{{options.name}}</el-button>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "/@/store/Home";
import { useRouter, useRoute } from 'vue-router'

const HomeStore = useHomeStore();
const Router = useRouter()
const Route = useRoute()

const {
  classificationOptions,
  getClassificationHeight,
  getLayoutWidth
} = storeToRefs(HomeStore);

const activeClassification = ref(Route.name || "");

const useChangeActiveClassification = v => {
  activeClassification.value = v;
  Router.push(v.type)
};
</script>

<style lang="scss">
.chat-container-header-classification-button {
  color: #909090;
  font-weight: 400;
  margin-right: 10px;

  &:hover {
    color: #007fff;
  }

  &-active {
    color: #007fff;
  }
}
</style>
