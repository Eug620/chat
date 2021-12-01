<!--
 * @Author       : Eug
 * @Date         : 2021-11-30 15:24:18
 * @LastEditTime : 2021-12-01 12:40:54
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/views/create/index.vue
-->
<template>
  <div class="chat-create">
    <el-card class="chat-create-item">
      <el-form class="chat-create-form" ref="refForm" :model="form" label-width="auto" inline>
        <el-form-item label="标题">
          <el-input prefix-icon="postcard" size="small" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input prefix-icon="message" size="small" v-model="form.describe"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <mavon-editor
      :style="{maxHeight: useComWidth}"
      v-model="form.content"
      class="chat-create-item chat-create-editor"
      codeStyle="brown-paper"
      @fullScreen="useFullScreen"
      :ishljs="true"
      v-bind="{...editorSetting}"
      :toolbars="editorToolBars"
    />

    <el-card class="chat-create-item">
      <el-button circle :icon="Check" :disabled="!isLogin" @click="useSave"></el-button>
      <el-button circle :icon="Close" @click="useCancel"></el-button>
      <el-button
        class="chat-create-item-setting"
        circle
        type="danger"
        @click="useShowSetting"
        :icon="Setting"
      ></el-button>
    </el-card>

    <el-drawer
      custom-class="chat-create-drawer"
      v-model="drawer"
      title="Editor Setting"
      direction="rtl"
    >
      <el-scrollbar>
        <el-divider content-position="left">Editor Setting</el-divider>
        <el-form
          class="chat-create-form-setting"
          ref="refSettingForm"
          :model="editorSetting"
          label-width="120px"
          label-position="top"
        >
          <el-form-item label="fontSize">
            <el-input v-model="editorSetting.fontSize"></el-input>
          </el-form-item>
          <el-form-item label="language">
            <el-select v-model="editorSetting.language" placeholder="Select">
              <el-option
                v-for="item in languageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="boxShadow">
            <el-switch v-model="editorSetting.boxShadow" />
          </el-form-item>
          <el-form-item label="scrollStyle">
            <el-switch v-model="editorSetting.scrollStyle" />
          </el-form-item>
          <el-form-item label="boxShadowStyle">
            <el-input v-model="editorSetting.boxShadowStyle"></el-input>
          </el-form-item>
          <el-form-item label="transition">
            <el-switch v-model="editorSetting.transition" />
          </el-form-item>
          <el-form-item label="toolbarsBackground">
            <el-color-picker v-model="editorSetting.toolbarsBackground" />
          </el-form-item>
          <el-form-item label="previewBackground">
            <el-color-picker v-model="editorSetting.previewBackground" />
          </el-form-item>
          <el-form-item label="subfield">
            <el-switch v-model="editorSetting.subfield" />
          </el-form-item>
          <el-form-item label="defaultOpen">
            <el-select v-model="editorSetting.defaultOpen" placeholder="Select">
              <el-option
                v-for="item in defaultOpenOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="placeholder">
            <el-input v-model="editorSetting.placeholder"></el-input>
          </el-form-item>
          <el-form-item label="editable">
            <el-switch v-model="editorSetting.editable" />
          </el-form-item>
          <el-form-item label="codeStyle">
            <el-select v-model="editorSetting.codeStyle" placeholder="Select">
              <el-option
                v-for="item in codeStyleOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="toolbarsFlag">
            <el-switch v-model="editorSetting.toolbarsFlag" />
          </el-form-item>
          <el-form-item label="navigation">
            <el-switch v-model="editorSetting.navigation" />
          </el-form-item>
          <el-form-item label="shortCut">
            <el-switch v-model="editorSetting.shortCut" />
          </el-form-item>
          <el-form-item label="autofocus">
            <el-switch v-model="editorSetting.autofocus" />
          </el-form-item>
          <el-form-item label="ishljs">
            <el-switch v-model="editorSetting.ishljs" />
          </el-form-item>
        </el-form>
        <el-divider content-position="left">editor ToolBars</el-divider>
        <el-form
          class="chat-create-form-ToolBars"
          ref="refToolBarsForm"
          :model="editorToolBars"
          label-width="120px"
          label-position="top"
        >
          <el-form-item :label="tools" v-for="(val, tools) in editorToolBars" :key="tools">
            <el-switch v-model="editorToolBars[tools]" />
          </el-form-item>
        </el-form>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { str } from "./index";
import { Check, Setting, Close } from "@element-plus/icons";
import servers from "/@/server";
import { useUserStore } from "/@/store/User";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";

const UserStore = useUserStore();
const { isLogin, userInfo } = storeToRefs(UserStore);
const Router = useRouter();
const form = reactive({
  title: "",
  describe: "",
  content: ""
});
const drawer = ref(false);

const useShowSetting = () => {
  drawer.value = true;
};

const editorSetting = reactive({
  fontSize: "14px", // 编辑区域文字大小
  language: "zh-CN", // 语言选择，暂支持 zh-CN: 简体中文, zh-TW: 正体中文 ， en: 英文 ， fr: 法语， pt-BR: 葡萄牙语， ru: 俄语， de: 德语， ja: 日语
  boxShadow: true, // 	开启边框阴影
  scrollStyle: true, // 开启滚动条样式(暂时仅支持chrome)
  boxShadowStyle: "0 2px 12px 0 rgba(0, 0, 0, 0.1)", // 边框阴影样式
  transition: true, // 是否开启过渡动画
  toolbarsBackground: "#ffffff", // 工具栏背景颜色
  previewBackground: "#fbfbfb", // 预览框背景颜色
  subfield: true, //true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
  defaultOpen: "preview", // edit： 默认展示编辑区域 ， preview： 默认展示预览区域 , 其他 = edit
  placeholder: "开始编辑...", //输入框为空时默认提示文本
  editable: true, //	是否允许编辑
  codeStyle: "vs2015", // markdown样式： 默认github
  toolbarsFlag: true, //工具栏是否显示
  navigation: false, //默认展示目录
  shortCut: true, //是否启用快捷键
  autofocus: true, // 自动聚焦到文本框
  ishljs: true, // 代码高亮
  imageFilter: null, //图片过滤函数，参数为一个File Object，要求返回一个Boolean, true表示文件合法，false表示文件不合法
  imageClick: null, //图片点击事件，默认为预览，可覆盖
  // tabSize: "\t", // tab转化为几个空格，默认为\t
  xssOptions: null // xss规则配置，参考 https://github.com/leizongmin/js-xss
});
const editorToolBars = reactive({
  // 工具栏
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: true, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: true, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: true, // 单双栏模式
  preview: true // 预览
});
const fullScreenStatus = ref(false);
const useFullScreen = v => {
  fullScreenStatus.value = v;
};
const languageOptions = [
  {
    label: "简体中文",
    value: "zh-CN"
  },
  {
    label: "正体中文",
    value: "zh-TW"
  },
  {
    label: "英文",
    value: "en"
  },
  {
    label: "法语",
    value: "fr"
  },
  {
    label: "葡萄牙语",
    value: "pt-BR"
  },
  {
    label: "俄语",
    value: "ru"
  },
  {
    label: "德语",
    value: "de"
  },
  {
    label: "日语",
    value: "ja"
  }
];

const defaultOpenOptions = [
  {
    label: "默认展示编辑区域",
    value: "edit"
  },
  {
    label: "默认展示预览区域",
    value: "preview"
  }
];

const codeStyleOptions = [
  {
    label: "agate",
    value: "agate"
  },
  {
    label: "androidstudio",
    value: "androidstudio"
  },
  {
    label: "arduino-light",
    value: "arduino-light"
  },
  {
    label: "arta",
    value: "arta"
  },
  {
    label: "ascetic",
    value: "ascetic"
  },
  {
    label: "atelier-cave-dark",
    value: "atelier-cave-dark"
  },
  {
    label: "atelier-cave-light",
    value: "atelier-cave-light"
  },
  {
    label: "atelier-dune-dark",
    value: "atelier-dune-dark"
  },
  {
    label: "atelier-dune-light",
    value: "atelier-dune-light"
  },
  {
    label: "atelier-estuary-dark",
    value: "atelier-estuary-dark"
  },
  {
    label: "atelier-estuary-light",
    value: "atelier-estuary-light"
  },
  {
    label: "atelier-forest-dark",
    value: "atelier-forest-dark"
  },
  {
    label: "atelier-forest-light",
    value: "atelier-forest-light"
  },
  {
    label: "atelier-heath-dark",
    value: "atelier-heath-dark"
  },
  {
    label: "atelier-heath-light",
    value: "atelier-heath-light"
  },
  {
    label: "atelier-lakeside-dark",
    value: "atelier-lakeside-dark"
  },
  {
    label: "atelier-lakeside-light",
    value: "atelier-lakeside-light"
  },
  {
    label: "atelier-plateau-dark",
    value: "atelier-plateau-dark"
  },
  {
    label: "atelier-plateau-light",
    value: "atelier-plateau-light"
  },
  {
    label: "atelier-savanna-dark",
    value: "atelier-savanna-dark"
  },
  {
    label: "atelier-savanna-light",
    value: "atelier-savanna-light"
  },
  {
    label: "atelier-seaside-dark",
    value: "atelier-seaside-dark"
  },
  {
    label: "atelier-seaside-light",
    value: "atelier-seaside-light"
  },
  {
    label: "atelier-sulphurpool-dark",
    value: "atelier-sulphurpool-dark"
  },
  {
    label: "atelier-sulphurpool-light",
    value: "atelier-sulphurpool-light"
  },
  {
    label: "atom-one-dark",
    value: "atom-one-dark"
  },
  {
    label: "atom-one-light",
    value: "atom-one-light"
  },
  {
    label: "brown-paper",
    value: "brown-paper"
  },
  {
    label: "codepen-embed",
    value: "codepen-embed"
  },
  {
    label: "color-brewer",
    value: "color-brewer"
  },
  {
    label: "darcula",
    value: "darcula"
  },
  {
    label: "dark",
    value: "dark"
  },
  {
    label: "darkula",
    value: "darkula"
  },
  {
    label: "default",
    value: "default"
  },
  {
    label: "docco",
    value: "docco"
  },
  {
    label: "dracula",
    value: "dracula"
  },
  {
    label: "far",
    value: "far"
  },
  {
    label: "foundation",
    value: "foundation"
  },
  {
    label: "github-gist",
    value: "github-gist"
  },
  {
    label: "github",
    value: "github"
  },
  {
    label: "googlecode",
    value: "googlecode"
  },
  {
    label: "grayscale",
    value: "grayscale"
  },
  {
    label: "gruvbox-dark",
    value: "gruvbox-dark"
  },
  {
    label: "gruvbox-light",
    value: "gruvbox-light"
  },
  {
    label: "hopscotch",
    value: "hopscotch"
  },
  {
    label: "hybrid",
    value: "hybrid"
  },
  {
    label: "idea",
    value: "idea"
  },
  {
    label: "ir-black",
    value: "ir-black"
  },
  {
    label: "kimbie.dark",
    value: "kimbie.dark"
  },
  {
    label: "kimbie.light",
    value: "kimbie.light"
  },
  {
    label: "magula",
    value: "magula"
  },
  {
    label: "mono-blue",
    value: "mono-blue"
  },
  {
    label: "monokai-sublime",
    value: "monokai-sublime"
  },
  {
    label: "monokai",
    value: "monokai"
  },
  {
    label: "obsidian",
    value: "obsidian"
  },
  {
    label: "ocean",
    value: "ocean"
  },
  {
    label: "paraiso-dark",
    value: "paraiso-dark"
  },
  {
    label: "paraiso-light",
    value: "paraiso-light"
  },
  {
    label: "pojoaque",
    value: "pojoaque"
  },
  {
    label: "purebasic",
    value: "purebasic"
  },
  {
    label: "qtcreator_dark",
    value: "qtcreator_dark"
  },
  {
    label: "qtcreator_light",
    value: "qtcreator_light"
  },
  {
    label: "railscasts",
    value: "railscasts"
  },
  {
    label: "rainbow",
    value: "rainbow"
  },
  {
    label: "routeros",
    value: "routeros"
  },
  {
    label: "school-book",
    value: "school-book"
  },
  {
    label: "solarized-dark",
    value: "solarized-dark"
  },
  {
    label: "solarized-light",
    value: "solarized-light"
  },
  {
    label: "sunburst",
    value: "sunburst"
  },
  {
    label: "tomorrow-night-blue",
    value: "tomorrow-night-blue"
  },
  {
    label: "tomorrow-night-bright",
    value: "tomorrow-night-bright"
  },
  {
    label: "tomorrow-night-eighties",
    value: "tomorrow-night-eighties"
  },
  {
    label: "tomorrow-night",
    value: "tomorrow-night"
  },
  {
    label: "tomorrow",
    value: "tomorrow"
  },
  {
    label: "vs",
    value: "vs"
  },
  {
    label: "vs2015",
    value: "vs2015"
  },
  {
    label: "xcode",
    value: "xcode"
  },
  {
    label: "xt256",
    value: "xt256"
  },
  {
    label: "zenburn",
    value: "zenburn"
  }
];
const useComWidth = computed(() => {
  return fullScreenStatus.value ? "100%" : "calc(100vh - 480px)";
});

const mergeProps = () => {
  const { user_name, user_id } = userInfo.value;
  return {
    article_title: form.title,
    author: user_name,
    article_describe: form.describe,
    article_content: form.content,
    user_id: user_id
  };
};
const useSave = async () => {
  console.log(form.content);
  try {
    let res = await servers.CreateArticle(mergeProps());
    if (res.code === 200) {
      ElNotification({
        title: "成功",
        message: "新增文字成功",
        type: "success"
      });
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

const useCancel = () => {
  Router.push("/");
};
</script>

<style lang="scss">
.chat-create {
  &-item {
    margin-bottom: 10px;
    &-setting {
      float: right;
    }
  }
  &-form {
  }
  &-drawer {
    max-width: 100vh;
    .el-drawer__body {
      max-height: calc(100vh - 70px);
      overflow: scroll;
    }
  }
  &-editor {
    max-height: calc(100vh - 480px);
  }
}
</style>