/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default function($scope, $window, commonSer) {
  'ngInject';

  $scope.goHome = function() {
    commonSer.goHome();
  };
};
