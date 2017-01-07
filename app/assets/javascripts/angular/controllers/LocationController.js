function LocationController($scope, $http, $stateParams) {
  var currentId = $stateParams.id;
  //$scope.title = "I'm the Parent.";
// $scope.title = currentId

}

angular
  .module('tacoApp')
  .controller('LocationController', LocationController);
