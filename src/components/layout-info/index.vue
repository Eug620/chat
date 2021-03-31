<!--
 * @Author       : Eug
 * @Date         : 2021-03-26 13:55:14
 * @LastEditTime : 2021-03-26 18:41:51
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/components/layout-info/index.vue
-->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <section
    class="fixed inset-0 overflow-hidden z-50"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-hidden">
      <!--
        Background overlay, show/hide based on slide-over state.

        Entering: "ease-in-out duration-500"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-500"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
        <div class="relative w-screen max-w-md">
          <!--
            Close button, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-500"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
            <button
              @click="useCloseInfo"
              class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="sr-only">Close panel</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            v-if="props.info.isLogin"
            class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
          >
            <div class="px-4 sm:px-6">
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Welcome!</h2>
            </div>
            <div class="mt-6 relative flex-1 px-4 sm:px-6">
              <!-- Replace with your content -->
              <div class="absolute inset-0 px-4 sm:px-6">
                <!-- <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div> -->
              </div>
              <!-- /End replace -->
            </div>
          </div>

          <div v-else class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
            <div
              class="h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
            >
              <div class="max-w-md w-full space-y-8">
                <div>
                  <svg t="1616773907406" class="icon mx-auto h-12 w-auto" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19251" width="48" height="48"><path d="M846.726194 462.606307l-108.698095 175.515454v238.176709l88.237277 78.646269H614.30409l85.999376-79.285669v-244.251015l-198.214175-280.377146h125.642211l59.464252-56.26725-105.501093-160.489541-110.296597-32.929129 13.427412-101.344989-167.203247 134.274118-226.667499 422.324071 158.251639 343.358102-72.571964 77.047768v46.03684h119.887606l29.412425-15.665314 23.977522 15.665314h607.750234v-54.988448l-136.19232-136.19232v-173.916953l72.891664-118.608804h26.215423l13.427412 103.582891h38.364034l9.910708-180.310958h-135.552919z" p-id="19252" fill="#4338ca"></path></svg>
                  <!-- <img
                    class="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  /> -->
                  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">{{isCreate ? 'Create' : 'Sign in'}}</h2>
                </div>
                <form class="mt-8 space-y-6">
                  <input type="hidden" name="remember" value="true" />
                  <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label class="sr-only">Name</label>
                      <input
                        v-model="account.user_name"
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="User Name"
                      />
                    </div>

                    <!-- create -->
                    <div v-if="isCreate">
                      <label class="sr-only">Email</label>
                      <input
                        v-model="account.user_email"
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email"
                      />
                    </div>


                    <div>
                      <label class="sr-only">Password</label>
                      <input
                        type="password"
                        v-model="account.user_password"
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label for="remember_me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>

                    <div class="text-sm">
                      <div
                        @click="useCreateAccount"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >{{isCreate ? 'Cancel' : 'Create your account'}}</div>
                    </div>
                  </div>

                  <div>
                    <div
                      @click="useSave"
                      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <!-- Heroicon name: solid/lock-closed -->
                        <svg
                          class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      {{isCreate ? 'Save' : 'Sign in'}}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAccountStates, useAccount } from './useInfo'
import { getCurrentInstance, toRefs } from 'vue'

export default {
  name: "layout-info",
  props: {
    info: Object
  },
  setup(props, ctx) {
    const state = useAccountStates(props)
    state.currentVM = getCurrentInstance().proxy
    const {
      useWatchProps,
      useCloseInfo,
      useCreateAccount,
      useSave
    } = useAccount(props, state, ctx)
    useWatchProps()
    return {
      ...toRefs(state),
      useCloseInfo,
      useCreateAccount,
      useSave,
      props
    };
  }
};
</script>

<style>
</style>