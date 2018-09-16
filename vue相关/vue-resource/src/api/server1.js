import axios from 'axios'
const serverIp = 'http://192.168.2.18:8888/'
// const serverIp = "http://192.168.2.24:8080/";   //json
// const serverIp = "http://192.168.2.46:8080/"    //stone
// const serverIp = "http://192.168.2.222:8080/"    //Andy

let setList = localStorage.getItem('setUpAll'),
  lang = setList == null ? 'zh' : JSON.parse(setList).radioLanguage
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    lang: lang
  } // application/x-www-form-urlencoded
  // timeout: 15000
}

// 处理断网时接口请求
axios.defaults.retry = 100
axios.defaults.retryDelay = 500

axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err) {
  let config = err.config
  // 如果配置不存在或未设置重试选项，则拒绝
  if (!config || !config.retry) return Promise.reject(err)

  // 设置变量以跟踪重试次数
  config.__retryCount = config.__retryCount || 0

  // 检查我们是否已经注销了总重试次数
  if (config.__retryCount >= config.retry) {
    // 剔除错误
    return Promise.reject(err)
  }

  // 增加重试次数
  config.__retryCount += 1

  // 创建新的承诺来处理指数退避
  let backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })

  // 返回调用AXIOS来重试请求的承诺
  return backoff.then(function () {
    return axios(config)
  })
})

export const myGet = (url, params, callback) => {
  let queryParam = queryParams(params)
  axios
    .get(serverIp + url + queryParam)
    .then(res => {
      if (res.data != undefined && res.data.errorCode == 0) {
        callback(res)
      }
    })
    .catch(error => {
      callback(error)
    })
}
export const myPost = (url, params, callback) => {
  axios
    .post(serverIp + url, params, config)
    .then(res => {
      if (res.data != undefined && res.data.errorCode == 0) {
        callback(res)
      }
    })
    .catch(error => {
      callback(error)
    })
}

function queryParams (params) {
  if (Object.prototype.toString.call(params).match(/Object/g)) {
    let str = '?'
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const element = params[key]
        if (str === '?') {
          str += `${key}=${element}`
        } else {
          str += `&${key}=${element}`
        }
      }
    }
    return str
  } else {
    return params
  }
}
