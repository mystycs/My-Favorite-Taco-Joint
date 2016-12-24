function HomeController($scope, $http) {

  var userkey = "4e44174751d2676221b5e9cc41451047" // zomato api key

  $scope.saveRestaurant = function(res_id) {

    $http({
      method: 'POST',
      url: "http://localhost:3000/mylist?res_id=" + res_id,
      responseType: 'json'
    }).then(function successCallback(response) {
      alert("success")

    }, function errorCallback(response) {
      alert("no success")
    });



  }

  $scope.searchZipcode = function(searchCriteria) {
    var zomatoZipSearch = "https://developers.zomato.com/api/v2.1/locations?query="

    zomatoZipSearch = zomatoZipSearch + $scope.searchCriteria;

    $http({
      method: 'GET',
      url: zomatoZipSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      searchLocations(response.data.location_suggestions[0].entity_id, response.data.location_suggestions[0].entity_type)
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }

  function searchLocations(entity_id, entity_type) {
    var zomatoLocationSearch = "https://developers.zomato.com/api/v2.1/search"

    zomatoLocationSearch = zomatoLocationSearch + '?entity_id=' + entity_id + '&entity_type=' + entity_type + '&q=taco';

    $http({
      method: 'GET',
      url: zomatoLocationSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      $scope.locations = response.data.restaurants
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }



}

angular
  .module('tacoApp')
  .controller('HomeController', HomeController);
