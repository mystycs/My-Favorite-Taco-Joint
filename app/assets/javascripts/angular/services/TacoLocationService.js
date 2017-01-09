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

  this.getMyList = function() {

    var responseData = []

    return $http({
      method: 'GET',
      url: "/mylist",
      responseType: 'json'

    }).then(function successCallback(response) {
        //$scope.mylist = response.data
        //getResData(response.data)


        for (var i = 0; i < response.data.length; i++) {
          //responseData.push(getResData(response.data[i].res_id))
          //responseData.push(getResData(response.data[i].res_id))
          getResData(response.data[i].res_id, responseData)
            //responseData = getResData(response.data[i].res_id)
          }

          // return responseData.all().then(function(){
          //   return R;
          // });
          //console.log("yo")
          //return responseData

          //console.log(resolve(responseData))

          //alert(JSON.stringify(responseData))
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
        //$scope.mylist += JSON.stringify(response.data)
        //alert(JSON.stringify(response.data))
        responseData.push(response.data)
        //return responseData

        //return responseData

        //alert(JSON.stringify(data))
        //$scope.mylist.push(response.data)
        //  $scope.mylist = response.data
      }, function errorCallback(response) {
        alert(response.data.message)
      });

    }


  }

  angular
    .module('tacoApp')
    .service('TacoLocationService', TacoLocationService);
