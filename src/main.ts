import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element-plus'
// 引入 mockJs
import '@/mock'
// 引入全局样式
import '@/styles/index.scss'

import request from '@/service'

interface DataType {
  status: number
  msg: string
}

interface CategorysDataType extends DataType {
  data: {
    title: string
    id: number
  }[]
}

request
  .get<CategorysDataType>({
    url: '/api/test'
  })
  .then((res) => {
    console.log(res.status)
    console.log(res.data)
    console.log(res.msg)
  })
  .catch((error) => {
    console.log(error)
  })
const app = createApp(App)

// 注册 Eelment Plus 插件
installElementPlus(app)

app.use(store).use(router).mount('#app')
