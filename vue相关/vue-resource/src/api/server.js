import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress'

// 基础配置
const servers = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 设置请求拦截，根据需要可以设置token鉴权，修改对应的配置项，捕获请求错误
servers.interceptors.request.use(
  function (config) {
    NProgress.start()
    return config
  },
  function (error) {
    Message({
      showClose: true,
      message: error && error.response,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

// 设置响应拦截,可以根据需求对响应数据进行预处理，resolve错误信息便于处理响应错误
servers.interceptors.response.use(
  function (response) {
    NProgress.done()
    return response
  },
  function (error) {
    NProgress.done()
    return Promise.resolve(error)
  }
)

export default {
  post (url, data) {
    return servers({
      method: 'post',
      data,
      url
    })
  },
  get (url, params) {
    return servers({
      method: 'get',
      params,
      url
    })
  }
}
