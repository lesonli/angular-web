/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

import config from './config/config';
import httpConfig from './config/http';
import routerConfig from './config/route';
import themeConfig from './config/theme';


// service
import commonSer from './common/commonSer';

// directive

// controller
import homeCtrl from './auth/home/homeCtrl';


angular.module('webProject',
  ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngMessages', 'ngMaterial'])

  // 配置全局常量
  .constant('lcConfig', config)
  .constant('moment', window.moment)

  // 基础配置

  .config(httpConfig)
  .config(routerConfig)
  .config(themeConfig)

  // 自动执行

  // services 初始化
  .service('commonSer', commonSer)

  // controller 初始化
  .controller('homeCtrl', homeCtrl);

