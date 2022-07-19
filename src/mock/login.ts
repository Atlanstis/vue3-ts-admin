import Mock from 'mockjs'

export default {
  // 登录
  login: () => {
    return Mock.mock({
      data: {
        id: 1,
        name: Mock.mock('@name'),
        token: 'dkafljsdjfoadskjdhadhsdforitu'
      },
      code: 200,
      msg: '请求成功'
    })
  },

  // 用户信息
  userInfo: () => {
    return Mock.mock({
      data: {
        id: 1,
        name: Mock.mock('@name'),
        realname: Mock.mock('@name'),
        cellphone: '13456765678',
        role: {
          id: 1,
          name: '超级管理员'
        },
        department: {
          id: 1,
          name: '总裁办',
          parentId: null
        }
      },
      code: 200,
      msg: '请求成功'
    })
  },

  // 获取用户菜单权限
  userMenus: () => {
    return Mock.mock({
      data: {},
      code: 200,
      msg: '请求成功'
    })
  }
}
