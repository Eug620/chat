<!--
 * @Author       : Eug
 * @Date         : 2021-11-25 15:22:50
 * @LastEditTime : 2021-11-25 18:25:32
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/RightViews/ProjectInformation.vue
-->
<template>
  <el-card shadow="never" class="ProjectInformation">
    <el-divider content-position="left">Project Information</el-divider>
    <el-collapse accordion>
      <el-collapse-item title="scripts" name="scripts">
        <!-- scripts -->
        <el-descriptions :column="1" size="mini" border>
          <el-descriptions-item v-for="(version, name) in scripts" :key="name">
            <template #label>{{name}}</template>
            {{version}}
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>
      <el-collapse-item title="dependencies" name="dependencies">
        <!-- dependencies -->
        <el-descriptions :column="1" size="mini" border>
          <el-descriptions-item v-for="(version, name) in dependencies" :key="name">
            <template #label>{{name}}</template>
            {{version}}
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>
      <el-collapse-item title="devDependencies" name="devDependencies">
        <!-- devDependencies -->
        <el-descriptions :column="1" size="mini" border>
          <el-descriptions-item v-for="(version, name) in devDependencies" :key="name">
            <template #label>{{name}}</template>
            {{version}}
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script setup>
import { scripts, dependencies, devDependencies } from '/#/package.json'
</script>

<style>
</style>