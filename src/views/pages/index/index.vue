<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 17:30:05
 * @LastEditTime : 2021-03-11 15:51:54
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/index/index.vue
-->
<template>
  <chat-container>
    <div class="flex">
      <div class="flex-grow">
        <div
          v-for="(item, idx) in articleList"
          :key="idx"
          class="m-4 bg-white shadow overflow-hidden sm:rounded-lg hover:shadow-lg transition duration-300 group"
        >
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:w-48"
                src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                alt="Man looking at item at a store"
              />
            </div>
            <div class="p-8 w-full relative box-border">
              <div
                class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
              >
                {{ item.author }}
              </div>
              <a
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >{{ item.article_describe }}</a
              >
              <p class="mt-2 text-gray-500">
                概述 : {{ item.article_describe }}
              </p>
              <div class="mt-2 text-gray-500 absolute w-full bottom-10">
                <span class="absolute left-0">
                  浏览量 : {{ item.page_views }}
                </span>
                <span class="absolute right-16">
                  发布日期 : {{ item.create_time }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex-grow-0 h-12 text-center flex m-4 w-3/12 px-4 bg-white shadow-md sm:rounded-2xl">
        <div class="flex-grow py-4 border-r-2 border-Gray-900">1</div>
        <div class="flex-grow py-4 border-r-2 border-Gray-900">2</div>
        <div class="flex-grow py-4">3</div>
      </div> -->
    </div>
  </chat-container>
</template>

<script>
import { useStates, useFunction } from "./useState";
import { getCurrentInstance, toRefs } from "vue";
export default {
  name: "Dashboard",
  setup(props, ctx) {
    const state = useStates(props);
    state.currentVm = getCurrentInstance().proxy;
    const { useHello, useGetList } = useFunction(props, state, ctx);
    useGetList();
    return {
      ...toRefs(state),
      useHello,
    };
  },
};
</script>

<style>
</style>