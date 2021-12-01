<template>
  <div class="chat-container-header-navigation-layout">
    <el-image
      class="ChatLogo"
      :src="Logo"
      @click="useToHome"
    ></el-image>
    <template v-for="(Navigation, idx) in navigationOptions">
      <template v-if="idx !== navigationOptions.length - 1">
        <el-button
          :key="Navigation"
          type="text"
          class="chat-container-header-navigation-button"
          :class="{'chat-container-header-navigation-button-active': activeNavigation === Navigation}"
          @click="useChangeActiveNavigation(Navigation)"
        >{{Navigation}}</el-button>
      </template>

      <template v-else>
        <el-badge value="2021" class="chat-container-header-navigation-end" :key="Navigation">
          <el-button
            type="text"
            class="chat-container-header-navigation-button"
            :class="{'chat-container-header-navigation-button-active': activeNavigation === Navigation}"
            @click="useChangeActiveNavigation(Navigation)"
          >{{Navigation}}</el-button>
        </el-badge>
      </template>
    </template>
<!-- 
    <el-input
      class="navigation-search"
      v-model="searchInput"
      size="small"
      :placeholder="searchInputPlaceholder"
      @focus="useSearchFocus"
      @blur="useSearchBlur"
    >
      <template #suffix>
        <el-icon class="el-input__icon">
          <Search />
        </el-icon>
      </template>
    </el-input>

    <transition name="el-zoom-in-center">
      <el-button
        v-show="isShowButton"
        size="small"
        class="navigation-right-button creator-center"
      >创作者中心</el-button>
    </transition>
    <transition name="el-zoom-in-center">
      <el-dropdown
        v-show="isShowButton"
        trigger="click"
        split-button
        type="primary"
        size="small"
        class="navigation-write-an-article"
      >
        写文章
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>发布沸点</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </transition> -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "/@/store/Home";
import { useRouter } from "vue-router";
import { Search } from "@element-plus/icons";
import Logo from '/@/assets/images/logo.jpeg'
const HomeStore = useHomeStore();
const { navigationOptions, getLayoutWidth } = storeToRefs(HomeStore);
const Router = useRouter();
const useToHome = () => {
  Router.push("/");
};

const activeNavigation = ref(navigationOptions.value[0] || "");
const useChangeActiveNavigation = v => {
  activeNavigation.value = v;
  useToHome()
};

// is show right button
const isShowButton = ref(true);
// searchInput
const searchInput = ref("");
const searchInputPlaceholder = ref("探索稀土掘金");

const useSearchFocus = () => {
  searchInputPlaceholder.value = "搜索文章/小册/标签/用户";
  isShowButton.value = false;
};
const useSearchBlur = () => {
  searchInputPlaceholder.value = "探索稀土掘金";
  isShowButton.value = true;
};
</script>

<style lang="scss">
.chat-container-header-navigation-layout {
  width: v-bind(getLayoutWidth);
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;

  .ChatLogo {
    position: absolute;
    width: 48px;
    height: 48px;
    transform: translateX(-100%);
    margin-right: 20px;
    cursor: pointer;
  }
  .navigation-search {
    .el-input__inner {
      border: none;
      background-color: #f4f5f5;
    }
  }

  .navigation-right-button {
    margin: 0 20px;
    border: none;
  }
  .creator-center {
    background-color: #e8f3ff;
    color: #1e80ff;
    font-size: 14px;
  }
  .navigation-write-an-article {
    width: 410px;
  }
}

.chat-container-header-navigation-end {
  margin-right: 30px;
  .el-badge__content {
    top: 10px;
    background-color: #fff;
    color: #007fff;
  }
}

.chat-container-header-navigation-button {
  color: #909090;
  font-weight: 400;
  font-size: 16px;
  padding: 0 10px;

  // &:first-of-type {
  //   margin-left: 20px;
  // }

  &:hover {
    color: #007fff;
  }

  &-active {
    color: #007fff;
  }
}
</style>
