function TacoLocationService($http) {

  this.searchZipcode = function(searchCriteria) {
    var zomatoZipSearch = "https://developers.zomato.com/api/v2.1/locations?query="

    zomatoZipSearch = zomatoZipSearch + searchCriteria;
    return $http({
      method: 'GET',
      url: zomatoZipSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      //searchLocations(response.data.location_suggestions[0].entity_id, response.data.location_suggestions[0].entity_type)
      return response
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }

  this.searchLocations = function(entity_id, entity_type) {
    var zomatoLocationSearch = "https://developers.zomato.com/api/v2.1/search"

    zomatoLocationSearch = zomatoLocationSearch + '?entity_id=' + entity_id + '&entity_type=' + entity_type + '&q=taco';

    return $http({
      method: 'GET',
      url: zomatoLocationSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      return response.data.restaurants
        //$scope.locations = response.data.restaurants
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }


}

angular
  .module('tacoApp')
  .service('TacoLocationService', TacoLocationService);
