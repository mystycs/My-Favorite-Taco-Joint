function LocationController($scope, $http, $stateParams, TacoLocationService, TacoLocationSaveService, $state) {
  var currentId = $stateParams.id;

  TacoLocationService.getLocationData(currentId).then(function(value) {
    $scope.location = value
  });

  TacoLocationService.getReviews(currentId).then(function(value) {
    $scope.reviews = value
  });

  $scope.deleteRestaurant = function(currentId) {
    TacoLocationSaveService.deleteRestaurant(currentId)
    $state.go('list', null, { reload: true });
  }

}

angular
  .module('tacoApp')
  .controller('LocationController', LocationController);
