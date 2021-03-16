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
        :mdValuesP="msg.mdValue"
        :fullPageStatusP="false"
        :editStatusP="true"
        :previewStatusP="true"
        :navStatusP="true"
        :icoStatusP="true"
        @childevent="childEventHandler"
      />
    </div>
  </chat-container>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      msgShow: "要显示的内容",
      dilogStatus: false,
      msg: {
        mdValue: "## Chat-Editor"
      }
    });
    const childEventHandler = res => {
      // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
      state.msg = res;
    };
    return {
      ...toRefs(state),
      childEventHandler
    };
  }
};
</script>

<style>
</style>