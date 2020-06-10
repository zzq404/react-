// 配置编译环境和线上环境之间的切换
let baseUrl = '' // 分销接口
//http://test.art.fableedu.com  测试
//http://test.pre.fableedu.com  预生产
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseUrl = 'https://test.pre.fableedu.com/'
  // baseUrl = 'https://api.yidodo.com/'

  // baseUrl = 'http://test.art.fableedu.com/'

  // baseUrl = 'https://api.yidodo.com/'

} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://test.pre.fableedu.com/'
  // 打包上线环境
  // 根据不同的环境切换接口请求路径
  switch (window.location.origin) {
    // 开发环境
    case 'http://apptest.yidodo.com':
      baseUrl = 'http://test.art.fableedu.com/'
      break
      // 预生产环境 https
    case 'https://h5pre.yidodo.com':
      baseUrl = 'https://test.pre.fableedu.com/'
      break
      // 生产环境
    case 'https://www.yidodo.com':
      baseUrl = 'https://api.yidodo.com/'
      break
      // beta环境
    case 'https://betawww.yidodo.com':
      baseUrl = 'https://betaapi.yidodo.com/'
      break
  }
}
export {
  baseUrl
}
