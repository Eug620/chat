/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:00:09
 * @LastEditTime : 2021-12-01 15:05:11
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/vite.config.js
 */
import { defineConfig } from 'vite'
const { resolve } = require('path')

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': resolve(__dirname, 'src'),
      '/#': resolve(__dirname),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://47.93.229.170:3000',
        // target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  base: './',
  build: {
    assetsDir: 'assets',
    //设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //启用/禁用 brotli 压缩大小报告
    brotliSize: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 1000,
    // 移除console
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  //调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  logLevel: 'info',
  //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true
})
