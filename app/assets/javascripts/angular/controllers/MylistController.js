function MylistController($scope, $http, TacoLocationService, TacoLocationSaveService) {

  TacoLocationService.getMyList().then(function(value) {
    $scope.mylist = value
  });

  $scope.deleteRestaurant = function(res_id) {
    TacoLocationSaveService.deleteRestaurant(res_id)
  }

}

angular
  .module('tacoApp')
  .controller('MylistController', MylistController);
