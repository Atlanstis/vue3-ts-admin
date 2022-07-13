import { ElButton, ElMessage } from 'element-plus'
import { App } from 'vue'

export default (app: App<Element>) => {
  app.use(ElButton).use(ElMessage)
}
