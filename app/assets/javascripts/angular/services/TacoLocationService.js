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
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }

  this.getMyList = function() {

    var responseData = []

    return $http({
      method: 'GET',
      url: "/mylist",
      responseType: 'json'

    }).then(function successCallback(response) {
        for (var i = 0; i < response.data.length; i++) {
          getResData(response.data[i].res_id, responseData)
            // response.data[i].upVotes = 0
        }
        return responseData
      },
      function errorCallback(response) {
        alert("no success")
      });
  }

  function getResData(resData, responseData) {
    var zomatoResSearch = "https://developers.zomato.com/api/v2.1/restaurant"

    zomatoResSearch = zomatoResSearch + '?res_id=' + resData;

    return $http({
      method: 'GET',
      url: zomatoResSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      response.data.upVotes = 0
      responseData.push(response.data)
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }

  this.getLocationData = function(currentId) {
    var zomatoResSearch = "https://developers.zomato.com/api/v2.1/restaurant"

    zomatoResSearch = zomatoResSearch + '?res_id=' + currentId;

    return $http({
      method: 'GET',
      url: zomatoResSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      //$scope.mylist += JSON.stringify(response.data)
      return response.data
        //  $scope.mylist = response.data
    }, function errorCallback(response) {
      alert(response.data.message)
    });
  }

  this.getReviews = function(currentId) {
    var zomatoReviewSearch = "https://developers.zomato.com/api/v2.1/reviews"

    zomatoReviewSearch = zomatoReviewSearch + '?res_id=' + currentId + '&count=5';

    return $http({
      method: 'GET',
      url: zomatoReviewSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      //$scope.mylist += JSON.stringify(response.data)
      return response.data
        //  $scope.mylist = response.data
    }, function errorCallback(response) {
      alert(response.data.message)
    })

  }


}

angular
  .module('tacoApp')
  .service('TacoLocationService', TacoLocationService);
