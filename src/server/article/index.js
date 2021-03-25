/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:30:30
 * @LastEditTime : 2021-03-10 11:41:46
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/user/index.js
 */
import request from '/@/utils/axios'

const Url = {
    server: {
        getArticleList: '/article/getArticleList',
        createArticle: '/article/createArticle'
    }
}

export default {
    GetArticleList (params) {
        return request({
            url: Url['server'].getArticleList,
            method: 'get',
            params
        })
    },
    CreateArticle (data) {
        return request({
            url: Url['server'].createArticle,
            method: 'post',
            data
        })
    }
}