<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:14:32
 * @LastEditTime : 2021-11-30 15:46:53
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/views/news/index.vue
-->
<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-card shadow="never" class="card-list">
        <TitleItem :ArticleList="news" :isEnd="isEnd" />
      </el-card>
    </el-col>
    <el-col :span="8">
      <RightViews
        isShowProjectInformation
        isShowSystemInformation
      />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, inject, watch } from "vue";
import servers from "/@/server";
import { ElNotification } from "element-plus";
const page = ref(1);
const news = ref([]);
const isEnd = ref(false);
const useTops = inject("useTops");
watch(
  () => useTops.value,
  v => {
    if (v === 100) {
      setTimeout(() => {
        useGetList();
      }, 500);
    }
  }
);

const useGetList = async () => {
  try {
    let res = await servers.GetArticle({
      page: page.value,
      size: 10
    });
    if (res.code === 200) {
      news.value.push(...res.result);
      isEnd.value = res.result.length < 10 ? true : false;
      page.value++;
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
useGetList();
</script>

<style>
.card-list {
  width: 100%;
}
</style>