import Mock from 'mockjs'

Mock.setup({
  timeout: '300-600'
})

Mock.mock(
  '/api/test',
  'get',
  Mock.mock({
    'data|6': [
      {
        'title|+1': [
          'VUE',
          'TypeScript',
          'React',
          'Vite',
          'Webpack',
          'Angular'
        ],
        'id|+1': [0, 1, 2, 3, 4, 5]
      }
    ],
    status: 200,
    msg: '请求成功'
  })
)
