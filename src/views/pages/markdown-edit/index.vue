<!--
 * @Author       : Eug
 * @Date         : 2021-03-11 17:57:04
 * @LastEditTime : 2021-03-16 11:33:21
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/markdown-edit/index.vue
-->
<template>
  <chat-container>
    <div class="py-4 h-full w-full">
      <chat-editor
        v-model:mdValue="markedOption.mdValue"
        :isFullPage="markedOption.isFullPage"
        :isShowEdit="markedOption.isShowEdit"
        :isShowPreview="markedOption.isShowPreview"
        :isShowNav="markedOption.isShowNav"
        :isShowIcon="markedOption.isShowIcon"
        @childevent="useMarkedEvent"
      />
    </div>
  </chat-container>
</template>

<script>
import { toRefs, getCurrentInstance } from "vue";
import {
  state,
  useMarkedEvent
} from './useMarkdown'
export default {
  setup() {
    state.currentVM = getCurrentInstance().proxy
    return {
      ...toRefs(state),
      useMarkedEvent
    };
  }
};
</script>

<style>
</style>