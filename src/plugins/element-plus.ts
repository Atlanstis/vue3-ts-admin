// Element Plus 相关
import {
  ElButton,
  ElMessage,
  ElForm,
  ElFormItem,
  ElTabPane,
  ElTabs,
  ElInput,
  ElCheckbox,
  ElLink,
  ElIcon
} from 'element-plus'
import { App } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElMessage,
  ElForm,
  ElFormItem,
  ElTabPane,
  ElTabs,
  ElInput,
  ElCheckbox,
  ElLink,
  ElIcon
]

export default (app: App<Element>) => {
  // 注册组件
  for (const component of components) {
    app.use(component)
  }
  // 引入图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`Icon-${key}`, component)
  }
}
