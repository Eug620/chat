/* 
 * @Author       : Eug
 * @Date         : 2021-04-02 14:11:59
 * @LastEditTime : 2021-04-02 14:12:47
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/server/iamge/index.js
 */
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
        background: '/image/background'
    }
}

export default {
    GetBackground (params) {
        return request({
            url: Url['server'].background,
            method: 'get',
            params
        })
    }
}