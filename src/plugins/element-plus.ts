import { ElButton, ElMessage } from 'element-plus'
import { App } from 'vue'

const components = [ElButton, ElMessage]

export default (app: App<Element>) => {
  for (const component of components) {
    app.use(component)
  }
}
