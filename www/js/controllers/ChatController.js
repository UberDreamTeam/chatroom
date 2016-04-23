(function () {
  angular.module('chatRoom').controller('ChatController', function ($scope, SocketService) {
    //SocketService.emit('chat message', "what the fuck");
    $scope.messages = [];

    $scope.sendMessage = function () {
      SocketService.emit('chat message', $scope.message);
      $scope.message = '';
    };

    SocketService.on('chat message', function(message){
      $scope.messages.push({
        from: 'Kuan',
        content: message,
        date: '12:22 09 April 2016'
      });
    });
  });
})();