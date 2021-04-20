/* 
* @Author       : Eug
* @Date         : 2021-04-20 18:06:04
 * @LastEditTime : 2021-04-20 18:46:31
 * @LastEditors  : Eug
* @Descripttion : Descripttion
 * @FilePath     : /chat/src/views/pages/hot-list/useHotList.js
*/
import { reactive } from "vue"
export const useStates = (props) => {
  return reactive({
    currentVm: null,
    navList: ['click', 'hover', 'blur'],
    activeNavData: [
      {
        image: 'https://farm4.staticflickr.com/3856/14579490651_194962a4a4_k.jpg?momo_cache_bg_uuid=168aba1d-4274-421a-85f3-756d7469b068',
        title: 'test-title',
        time: '2020-02-02',
        difficulty: 'difficulty',
        servings: 'servings',
        author: 'author',
        rating: 'rating'
      },
      {
        image: 'https://farm4.staticflickr.com/3856/14579490651_194962a4a4_k.jpg?momo_cache_bg_uuid=168aba1d-4274-421a-85f3-756d7469b068',
        title: 'test-title',
        time: '2020-02-02',
        difficulty: 'difficulty',
        servings: 'servings',
        author: 'author',
        rating: 'rating'
      },
      {
        image: 'https://farm4.staticflickr.com/3856/14579490651_194962a4a4_k.jpg?momo_cache_bg_uuid=168aba1d-4274-421a-85f3-756d7469b068',
        title: 'test-title',
        time: '2020-02-02',
        difficulty: 'difficulty',
        servings: 'servings',
        author: 'author',
        rating: 'rating'
      }
    ],
    activeNav: 'click'
  })
}

export const useFunctions = (props, state, ctx) => {
  const useNavClick = (v) => {
    state.activeNav = v
  }
  return {
    useNavClick
  }
}