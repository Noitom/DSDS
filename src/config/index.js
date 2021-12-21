var apiBaseUrl = 'http://192.168.1.11:8081/'
/* 临时使用线上地址测试 */
// apiBaseUrl = 'http://app.terraquanta.io:6969'
var baseUrl = 'http://app.yeegen.com:7070'
/* 生产环境 */
if (process.env.NODE_ENV !== 'development') {
  console.log('生产环境')
  apiBaseUrl = 'http://app.terraquanta.io:6969'
  baseUrl = 'http://app.terraquanta.io'
}

export {
  apiBaseUrl,
  baseUrl
}
