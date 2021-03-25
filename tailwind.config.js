/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 14:33:15
 * @LastEditTime : 2021-03-25 18:10:29
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/tailwind.config.js
 */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
