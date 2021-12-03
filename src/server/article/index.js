/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:30:30
 * @LastEditTime : 2021-12-03 15:58:26
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/article/index.js
 */
import request from '/@/utils/axios'

const Url = {
    server: {
        getArticle: '/article/getArticle',
        getArticleList: '/article/getArticleList',
        getHotArticle: '/article/getHotArticle',
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
    GetHotArticle (params) {
        return request({
            url: Url['server'].getHotArticle,
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