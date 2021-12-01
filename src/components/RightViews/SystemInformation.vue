<!--
 * @Author       : Eug
 * @Date         : 2021-11-25 15:23:25
 * @LastEditTime : 2021-11-29 17:20:33
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/RightViews/SystemInformation.vue
-->
<template>
  <el-card shadow="never" class="SystemInformation">
    <el-divider content-position="left">System Information</el-divider>
    <el-progress
      :text-inside="true"
      :stroke-width="16"
      type="line"
      :percentage="Equipment.RemainingPower"
      :status="useCompStatus"
    >
     <span>{{ Equipment.StateOfCharge ? '🔋' : '' }}{{Equipment.RemainingPower + '%'}}</span>
    </el-progress>

    <el-collapse accordion>
      <el-collapse-item title="address" name="address">
        <!-- address -->
        <el-descriptions :column="1" size="mini" border>
          <el-descriptions-item v-for="(version, name) in address" :key="name">
            <template #label>{{name}}</template>
            {{version}}
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script setup>
import { reactive, computed } from "vue";
import utils from "/@/utils/index.js";
const { PowerWithStateOfCharge } = utils;

PowerWithStateOfCharge((battery) => {
  // 是否正在充电，yes-充电
  Equipment.StateOfCharge = battery.charging
  // 当前剩余电量
  Equipment.RemainingPower = battery.level * 100;
});

const address = reactive({
  IP: null,
  AreaCode: null,
  Location: null,
  userAgent: null,
  onLine: null
});
const useGetAddress = () => {
  try {
    address.IP = returnCitySN["cip"]
    address.AreaCode = returnCitySN["cid"]
    address.Location = returnCitySN["cname"]
    address.userAgent = navigator.userAgent
    address.onLine = navigator.onLine ? 'onLine' : 'offLine'
  } catch(error) {
    console.log(error)
  }
}
useGetAddress()
const Equipment = reactive({
  StateOfCharge: false,
  RemainingPower: 0
  // appName: navigator.appName,
  // appCodeName: navigator.appCodeName,
  // appVersion: navigator.appVersion,
  // appMinorVersion: navigator.appMinorVersion,
  // platform: navigator.platform,
  // cookieEnabled: navigator.cookieEnabled,
  // onLine: navigator.onLine,
  // userLanguage: navigator.userLanguage,
})

const useCompStatus = computed(() => {
  if (Equipment.RemainingPower <= 20) {
    return 'exception'
  } else if (Equipment.RemainingPower <= 60) {
    return 'warning'
  } else {
    return 'success'
  }
})

</script>

<style lang="scss">
.SystemInformation {
  margin-top: 10px;
}
</style>