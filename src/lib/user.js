/* 
 * @Author       : Eug
 * @Date         : 2021-04-02 10:49:12
 * @LastEditTime : 2021-04-20 15:24:37
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/lib/user.js
 */
const GetUserInfo = () => {
    return JSON.parse(localStorage.getItem('EUG_USER_INFO')) || {}
}

const RemoveUserInfo = () => {
    localStorage.removeItem('EUG_USER_INFO')
}

export default {
    GetUserInfo,
    RemoveUserInfo
}