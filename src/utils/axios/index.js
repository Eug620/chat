/* 
 * @Author       : Eug
 * @Date         : 2021-03-09 16:25:28
 * @LastEditTime : 2021-09-13 16:58:27
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /chat/src/utils/axios/index.js
 */
import Axios from 'axios'

// 创建一个错误
function errorCreate (msg) {
  const error = new Error(msg)
  errorLog(error)
  throw error
}

// 记录和显示错误
function errorLog (error) {
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    console.log(error)
  }
  let errorMsg = error.message
  if (error.message.includes('timeout')) {
    errorMsg = '[ code: 408 ] ' + error.message
  }
}

// 创建一个 axios 实例
const service = Axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 30 * 1000, // 请求超时时间
  withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['X-Token'] = 'XXXXXXXX'
    return config
  },
  error => {
    // 发送失败
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { code } = dataAxios
    // 根据 code 进行判断
    if (code === undefined) {
      // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
      return dataAxios
    } else {
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (code) {
        case 200:
          return dataAxios
        case 0:
          return dataAxios.data
        case 403:
          // [ 示例 ] 其它和后台约定的 code
          return dataAxios
          // errorCreate(`[ code: 403 ] ${dataAxios.msg} : ${response.config.url}`)
          break
        case 204:
          // [ 示例 ] 其它和后台约定的 code
          errorCreate(`[ code: 204 ] ${dataAxios.msg}: ${response.config.url}`)
          break
        case 401:
          /// 需要去退出到登录页
          // [ 示例 ] 其它和后台约定的 code
          errorCreate(`[ code: 401 ] ${dataAxios.msg}, 2秒后自动跳转至登录 : ${response.config.url}`)
          break
        default:
          // 不是正确的 code
          errorCreate(`${dataAxios.msg}: ${response.config.url}`)
          break
      }
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = `[ code: 400 ] server error 请求错误 ${error.response.data.msg || ''}`; break
        case 401: error.message = '[ code: 401 ] server error 未授权，请登录'; break
        // case 403: error.message = '[ code: 403 ] server error 拒绝访问'; break
        case 404: error.message = `[ code: 404 ] server error 请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '[ code: 408 ] server error 请求超时'; break
        case 413: error.message = `[ code: 413 ] server error Nginx等其他配置文件错误，${error.response.config.url}`; break
        case 500: error.message = '[ code: 500 ] server error 服务器内部错误'; break
        case 501: error.message = '[ code: 501 ] server error 服务未实现'; break
        case 502: error.message = '[ code: 502 ] server error 网关错误'; break
        case 503: error.message = '[ code: 503 ] server error 服务不可用'; break
        case 504: error.message = '[ code: 504 ] server error 网关超时'; break
        case 505: error.message = '[ code: 505 ] server error HTTP版本不受支持'; break
        default: break
      }
    }
    return Promise.reject(error)
  }
)

export default service
