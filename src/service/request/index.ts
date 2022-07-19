import axios from 'axios'
import localCache from '@/utils/cache'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RequestInterceptors, RequestConfig } from './type'

class Request {
  private instance: AxiosInstance
  private interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    // 通过创建实例时传入，配置拦截器
    if (config.interceptors) {
      this.interceptors = config.interceptors
      // 请求拦截器
      this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorCatch
      )
      // 响应拦截器
      this.instance.interceptors.response.use(
        this.interceptors?.responseInterceptor,
        this.interceptors?.responseInterceptorCatch
      )
    }
    // 所有实例的请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 相关认证操作
        if (config.headers) {
          const token = localCache.getCache('token')
          config.headers.Authorization = token
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // 所有实例的响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        // 使用 Mock.js 模拟的接口，无法在 Netwrok 面板中显示请求，故在此以打印方式代替
        const { config } = res
        console.log('------------------------------')
        console.log(`请求接口为：${config.url}`)
        console.log(`请求方式为：${config.method}`)
        if (config.method === 'post') {
          console.log(`请求参数为：${config.data}`)
        }
        console.log(`响应内容为：`)
        console.log(data)
        console.log('------------------------------')
        if (data.code !== 200) {
          // 非通信错误，程序中因逻辑原因认为的出错
        } else {
          return data
        }
      },
      (error) => {
        // 请求状态为非 200 时进入，可进行错误提示等
        return Promise.reject(error)
      }
    )
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}

export default Request
