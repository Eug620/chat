<!--
 * @Author       : Eug
 * @Date         : 2021-03-11 17:57:04
 * @LastEditTime : 2021-04-20 15:37:39
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/markdown-edit/index.vue
-->
<template>
  <chat-container>
    <div class="pt-4">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-3">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-6 sm:col-span-4">
                      <label
                        class="pl-3 border-double border-4 border-light-blue-500 border-t-0 border-r-0 border-b-0 text-lg font-medium antialiased font-mono text-purple-600 text-opacity-70 block text-sm font-medium text-gray-700"
                      >Title</label>
                      <input
                        type="text"
                        placeholder="Title..."
                        v-model="articleForm.title"
                        class="ml-8 pl-10 my-4 placeholder-gray-500 border-t-0 border-b-0 border-r-0 rounded-3xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label
                        class="pl-3 border-double border-4 border-light-blue-500 border-t-0 border-r-0 border-b-0 text-lg font-medium antialiased font-mono text-purple-600 text-opacity-70 block text-sm font-medium text-gray-700"
                      >Describe</label>
                      <input
                        type="text"
                        placeholder="Describe..."
                        v-model="articleForm.describe"
                        class="ml-8 pl-10 my-4 placeholder-gray-500 border-t-0 border-b-0 border-r-0 rounded-3xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6">
                      <label
                        class="pl-3 mb-6 border-double border-4 border-light-blue-500 border-t-0 border-r-0 border-b-0 text-lg font-medium antialiased font-mono text-purple-600 text-opacity-70 block text-sm font-medium text-gray-700"
                      >Substance</label>
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
                <div class="px-4 py-3 bg-white text-right sm:px-6">
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
import { toRefs, getCurrentInstance, defineComponent } from "vue";
import { useMark, useMarkStates } from "./useMarkdown";
export default defineComponent({
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
})
</script>

<style>
</style>