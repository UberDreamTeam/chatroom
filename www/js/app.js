(function () {

  var app = angular.module('chatRoom', ['ionic']);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  });

  app.controller('BasicController', function ($scope) {
    $scope.messages = [
      {
        from: 'kuan',
        content: 'WTF',
        date: '13:56 26 March 2015'
      },
      {
        from: 'max',
        content: 'WTF man',
        date: '13:57 26 March 2015'
      },
      {
        from: 'Simon',
        content: 'I\'m a noo000000b',
        date: '13:57 26 March 2015'
      }
    ];
  });

})();