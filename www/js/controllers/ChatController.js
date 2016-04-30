(function () {
  angular.module('chatRoom').controller('ChatController', function ($scope, $firebaseArray) {

    var firebaseReference = new Firebase("https://chatrroom-app.firebaseio.com/");
    var messagesReference = firebaseReference.child('messages');
    var messages = $firebaseArray(messagesReference);

    $scope.messages = messages;

    $scope.sendMessage = function () {
      $scope.messages.$add({
        content: $scope.message,
        from: 'kuan',
        timestamp: new Date().toString()
      });

      $scope.message = '';
    };
  });

})();