/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:30:30
 * @LastEditTime : 2021-11-29 17:32:14
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/server/article/index.js
 */
import request from '/@/utils/axios'

const Url = {
    server: {
        getArticle: '/article/getArticle',
        getArticleList: '/article/getArticleList',
        createArticle: '/article/createArticle',
        detailArticle: '/article/detailArticle'
    }
}

export default {
    GetArticle (params) {
        return request({
            url: Url['server'].getArticle,
            method: 'get',
            params
        })
    },
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
    },
    DetailArticle (data) {
        return request({
            url: Url['server'].detailArticle,
            method: 'post',
            data
        })
    }
}