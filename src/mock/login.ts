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
      data: [
        {
          children: [
            {
              children: null,
              id: 39,
              name: '核心技术',
              parentId: 38,
              sort: 106,
              type: 2,
              url: '/main/analysis/overview'
            },
            {
              children: null,
              id: 40,
              name: '商品统计',
              parentId: 38,
              sort: 107,
              type: 2,
              url: '/main/analysis/dashboard'
            }
          ],
          icon: 'Monitor',
          id: 38,
          name: '系统总览',
          sort: 1,
          type: 1,
          url: '/main/analysis'
        },
        {
          children: [
            {
              children: null,
              id: 11,
              name: '用户管理',
              parentId: 1,
              sort: 106,
              type: 2,
              url: '/main/system/user'
            },
            {
              children: null,
              id: 12,
              name: '部门管理',
              parentId: 1,
              sort: 107,
              type: 2,
              url: '/main/system/department'
            },
            {
              children: null,
              id: 13,
              name: '菜单管理',
              parentId: 1,
              sort: 107,
              type: 2,
              url: '/main/system/menu'
            },
            {
              children: null,
              id: 14,
              name: '角色管理',
              parentId: 1,
              sort: 107,
              type: 2,
              url: '/main/system/role'
            }
          ],
          icon: 'Setting',
          id: 1,
          name: '系统管理',
          sort: 2,
          type: 1,
          url: '/main/system'
        },
        {
          children: [
            {
              children: null,
              id: 21,
              name: '商品类别',
              parentId: 2,
              sort: 107,
              type: 2,
              url: '/main/product/category'
            },
            {
              children: null,
              id: 22,
              name: '商品信息',
              parentId: 2,
              sort: 107,
              type: 2,
              url: '/main/product/goods'
            }
          ],
          icon: 'GoodsFilled',
          id: 2,
          name: '商品中心',
          sort: 1,
          type: 1,
          url: '/main/product'
        },
        {
          children: [
            {
              children: null,
              id: 31,
              name: '你的故事',
              parentId: 2,
              sort: 107,
              type: 2,
              url: '/main/story/chat'
            },
            {
              children: null,
              id: 32,
              name: '故事列表',
              parentId: 2,
              sort: 107,
              type: 2,
              url: '/main/story/list'
            }
          ],
          icon: 'ChatDotRound',
          id: 3,
          name: '随便聊聊',
          sort: 1,
          type: 1,
          url: '/main/story'
        }
      ],
      code: 200,
      msg: '请求成功'
    })
  }
}
