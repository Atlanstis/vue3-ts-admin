import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element-plus'
// 引入 mockJs
import '@/mock'
// 引入全局样式
import '@/styles/index.scss'
// 将本地存储的信息存入 vuex
import { setupStore } from './store'

const app = createApp(App)

// 注册 Eelment Plus 插件
installElementPlus(app)

setupStore()

app.use(store).use(router).mount('#app')
