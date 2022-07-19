import Mock from 'mockjs'
import login from './login'

Mock.setup({
  timeout: '300-600'
})

Mock.mock('/login', 'post', login.login)
Mock.mock(/\/users\/\d/, 'get', login.userInfo)
Mock.mock(/\/role\/\d\/menu/, 'get', login.userMenus)
