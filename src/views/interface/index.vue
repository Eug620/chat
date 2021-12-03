<!--
 * @Author       : Eug
 * @Date         : 2021-11-23 12:10:31
 * @LastEditTime : 2021-12-03 17:02:18
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/interface/index.vue
-->
<template>
  <div class="chat-interface">
    <el-card shadow="never" class="chat-interface-card border-0">
      <el-date-picker
        v-model="datePicker"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :disabled-date="disabledDate"
        @change="useChange"
      ></el-date-picker>
    </el-card>
    <el-card shadow="never" class="chat-interface-card border-0" :key="item" v-for="item in TypeList">
      <template #header>{{item}}</template>
      <div class="logview" :id="`id_${item}`"></div>
    </el-card>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { useHomeStore } from "/@/store/Home";
import { storeToRefs } from "pinia";
import servers from "/@/server";
import { reactive, onMounted, ref } from "vue";
import { ElNotification } from "element-plus";
const HomeStore = useHomeStore();
const { getLayoutWidth } = storeToRefs(HomeStore);

const datePicker = ref([]);
const logData = ref([]);
const cache_xAxis_data = reactive([])
const belongList = reactive({});
const TypeList = reactive([]);
const NameList = reactive([]);
const xAxis_data = reactive([]);
const disabledDate = time => {
  const end = new Date(cache_xAxis_data[cache_xAxis_data.length - 1]);
  const start = new Date(cache_xAxis_data[0]);
  return (
    time.getTime() > end.getTime() ||
    time.getTime() < start.getTime() - 86400000
  );
};
const useChange = async () => {
  const start = datePicker.value[0]
  const end = datePicker.value[1]
  let _xAxis_data = []
  cache_xAxis_data.forEach((item, idx) => {
    const timeNow = new Date(`${item} 00:00:00`)
    if (timeNow.getTime() >= start.getTime() && timeNow.getTime() <= end.getTime()) {
      _xAxis_data.push(item)
    }
  })
  xAxis_data.splice(0,xAxis_data.length)
  xAxis_data.push(..._xAxis_data)
  await useRefreshCharts()
  
}
const useGetInterfaceLogData = async () => {
  try {
    let res = await servers.GetInterfaceLog();
    if (res.code === 200) {
      logData.value = res.result;
      cache_xAxis_data.push(...res.result.map(item => item.log_date))
      xAxis_data.push(...res.result.map(item => item.log_date));
      datePicker.value = [new Date(cache_xAxis_data[0]), new Date(cache_xAxis_data[cache_xAxis_data.length-1]) ]
    } else {
      ElNotification({
        title: "警告",
        message: res.result.msg,
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
const useGetInterfaceDetail = async () => {
  try {
    let res = await servers.GetInterfaceDetail();
    if (res.code === 200) {
      useDeconstructionData(res.result);
    } else {
      ElNotification({
        title: "警告",
        message: res.result.msg,
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

const useDeconstructionData = data => {
  data.forEach(item => {
    if (!belongList[item.belong]) {
      belongList[item.belong] = [];
    }
    belongList[item.belong].push(item);
  });
  TypeList.push(...Object.keys(belongList));
  TypeList.forEach(item => {
    NameList.push(belongList[item].map(item => item.name));
  });
};
const useInitEcharts = index => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(`id_${TypeList[index]}`));
  var option;
  var legend_data = [];
  var series_data = [];
  legend_data = NameList[index];
  series_data = legend_data.map(item => {
    return {
      name: item
    };
  });
  series_data.forEach((item, idx) => {
    var _data_ = [];
    logData.value.forEach(_item => {
      let wtf = _item["log_data"].find(v => v.name === item.name);
      _data_.push(wtf ? wtf.request : 0);
    });
    item["type"] = "line";
    item["stack"] = "Total";
    item["data"] = _data_;
  });
  option = {
    title: {
      text: ""
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: legend_data,
      top: 40
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      height: "80%"
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none"
        },
        dataView: {
          readOnly: false
        },
        magicType: {
          type: ["line", "bar"]
        },
        restore: {},
        saveAsImage: {}
      },
      orient: "vertical"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxis_data
    },
    yAxis: {
      type: "value"
    },
    series: series_data
  };
  option && myChart.setOption(option);
};
const useRefreshCharts = () => {
  TypeList.forEach(async (item, idx) => {
    await useInitEcharts(idx);
  });
}
onMounted(async () => {
  await useGetInterfaceDetail();
  await useGetInterfaceLogData();
  await useRefreshCharts()
  
});
</script>

<style lang="scss">
.chat-interface {
  &-card {
    margin-bottom: 10px;
  }
  .logview {
    width: calc(v-bind(getLayoutWidth) - 40px);
    height: calc(v-bind(getLayoutWidth) / 2);
  }
}
</style>