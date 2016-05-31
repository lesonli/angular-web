/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

var config = {

  // http 请求超时时间
  httpTimeout: 20000,

  // Api 的请求地址
  //apiHost: 'http://localhost:4000',
  apiHost: 'http://api.laoshi123.com',

  // 运行环境的 host
  host: 'http://localhost:9000',

  BASE: {
    // Api 的请求地址
    apiHost: 'http://localhost:9000/',
    //apiHost: 'http://192.168.1.104:3000/',
    ossHost: 'http://dscj-app.oss-cn-qingdao.aliyuncs.com/',
    //不需要登录的api
    whiteApi: [
      'api/user/regist',
      'api/user/send_sms',
      'api/user/login_pwd',
      'api/user/forgot_pwd'
    ]
  }
};

// 判断是否为开发环境
var host = window.location.host;
if (('http://' + host) !== config.host) {
  config.apiHost = 'http://' + host;
}

export default config;
