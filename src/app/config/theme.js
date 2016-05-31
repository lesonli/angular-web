/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author lesonli
 */

export default ($mdThemingProvider) => {
  'ngInject';

  var flatGreenMap = $mdThemingProvider.extendPalette('green', {
    '500': '1bbc9b',
    '700': '585858',
    'A200': '3598db'
  });
  $mdThemingProvider.definePalette('flatGreen', flatGreenMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('flatGreen',{
      'default':'500',
      'hue-1':'700'
    })
    .accentPalette('flatGreen', {
      'default': 'A200' // use shade 200 for default, and keep all other shades the same
    });
};
