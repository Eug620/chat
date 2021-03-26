<!--
 * @Author       : Eug
 * @Date         : 2021-03-11 17:57:04
 * @LastEditTime : 2021-03-26 11:46:02
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/markdown-edit/index.vue
-->
<template>
  <chat-container>
    <div class="py-4 h-full w-full">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-3">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-6 sm:col-span-4">
                      <label
                        class="block text-sm font-medium text-gray-700"
                      >Article Title</label>
                      <input
                        type="text"
                        v-model="articleForm.title"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label
                        class="block text-sm font-medium text-gray-700"
                      >Author</label>
                      <input
                        type="text"
                        v-model="articleForm.author"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div class="col-span-6 sm:col-span-4">
                      <label
                        class="block text-sm font-medium text-gray-700"
                      >Article Describe</label>
                      <input
                        type="text"
                        v-model="articleForm.describe"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <!-- <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                      >Country / Region</label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div> -->

                    <div class="col-span-6">
                      <div class="border-gray-300 border h-screen">
                        <chat-editor
                          v-model:mdValue="markedOption.mdValue"
                          v-model:isFullPage="markedOption.isFullPage"
                          v-model:isShowEdit="markedOption.isShowEdit"
                          v-model:isShowPreview="markedOption.isShowPreview"
                          v-model:isShowNav="markedOption.isShowNav"
                          v-model:isShowIcon="markedOption.isShowIcon"
                          @childevent="useMarkedEvent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <div
                    @click="useSaveArticle"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >Save</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </chat-container>
</template>

<script>
import { toRefs, getCurrentInstance } from "vue";
import { useMark, useMarkStates } from "./useMarkdown";
export default {
  setup(props, ctx) {
    const state = useMarkStates(props);
    state.currentVM = getCurrentInstance().proxy;
    const { useMarkedEvent, useSaveArticle } = useMark(props, state, ctx);
    return {
      ...toRefs(state),
      useMarkedEvent,
      useSaveArticle
    };
  }
};
</script>

<style>
</style>