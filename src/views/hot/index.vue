<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:14:32
 * @LastEditTime : 2021-12-03 16:52:58
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/hot/index.vue
-->
<template>
   <el-row :gutter="20">
    <el-col :span="16">
      <el-card shadow="never" class="card-list border-0">
    <TitleItem :ArticleList="news" isShowIndex isShowImage/>
      </el-card>
    </el-col>
    <el-col :span="8">
      <RightViews
        isShowUserInformation
      />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import servers from "/@/server";
import { ElNotification } from "element-plus";
const news = ref([]);

const useGetList = async () => {
  try {
    let res = await servers.GetHotArticle();
    if (res.code === 200) {
      news.value.push(...res.result);
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
useGetList()
</script>

<style>
.card-list {
  width: 100%;
}
</style>