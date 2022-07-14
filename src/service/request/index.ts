import axios from 'axios'
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
          config.headers.Authorization = 'Authorization'
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
        if (data.status !== 200) {
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
