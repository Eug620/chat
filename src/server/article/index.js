/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:30:30
 * @LastEditTime : 2021-04-02 11:51:52
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/article/index.js
 */
import request from '/@/utils/axios'

const Url = {
    server: {
        getArticleList: '/article/getArticleList',
        createArticle: '/article/createArticle',
        detailArticle: '/article/detailArticle'
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
    },
    DetailArticle (data) {
        return request({
            url: Url['server'].detailArticle,
            method: 'post',
            data
        })
    }
}