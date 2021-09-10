<!--
 * @Author       : Eug
 * @Date         : 2021-03-10 17:30:05
 * @LastEditTime : 2021-09-10 15:09:18
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
          @click="useToDetail(item.article_id)"
          :key="idx"
          class="m-4 bg-white shadow overflow-hidden sm:rounded-lg hover:shadow-lg transition duration-300 group"
        >
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:w-48"
                src="https://farm5.staticflickr.com/4397/36576053190_37d6a72e14_k.jpg?momo_cache_bg_uuid=c1cb8ab8-9cbf-4f9d-b3e8-36ed985f9525"
                alt="Man looking at item at a store"
              />
            </div>
            <div class="p-8 w-full relative box-border">
              <a
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >{{ item.article_title }}</a
              >
              <div
                class="mt-2 tracking-wide text-sm text-indigo-500 font-semibold"
              >
                {{ item.author }}
              </div>
              <p class="mt-2 text-gray-500">
                概述 : {{ item.article_describe }}
              </p>
              <div class="mt-2 text-gray-500 absolute w-full bottom-10">
                <span class="absolute left-0">
                  浏览量 : {{ item.page_views }}
                </span>
                <span class="absolute right-16">
                  发布日期 : {{ lib.FormatTimer(item.create_time) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </chat-container>
</template>

<script>
import { useStates, useFunction } from "./useState";
import { getCurrentInstance, toRefs, defineComponent } from "vue";
import lib from '/@/lib'

export default defineComponent({
  name: "Dashboard",
  setup(props, ctx) {
    const state = useStates(props)
    state.currentVm = getCurrentInstance().proxy
    const { useGetList, useToDetail } = useFunction(props, state, ctx)
    useGetList()
    return {
      ...toRefs(state),
      useToDetail,
      lib
    };
  },
})
</script>

<style>
</style>