function HomeController($scope, $http, TacoLocationService, TacoLocationSaveService) {

  $scope.searchLocations = function(searchCriteria) {
    TacoLocationService
      .searchZipcode(searchCriteria)
      .then(function(response) {
        TacoLocationService
          .searchLocations(response.data.location_suggestions[0].entity_id, response.data.location_suggestions[0].entity_type)
          .then(function(response) {
            $scope.locations = response
          });
      });
  }

  $scope.saveRestaurant = function(res_id) {
    TacoLocationSaveService.saveRestaurant(res_id)
  }

}

angular
  .module('tacoApp')
  .controller('HomeController', HomeController);
