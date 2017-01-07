function LocationController($scope, $http, $stateParams) {
  var currentId = $stateParams.id;
  //$scope.title = "I'm the Parent.";
  //$scope.title = currentId


  var zomatoResSearch = "https://developers.zomato.com/api/v2.1/restaurant"

  zomatoResSearch = zomatoResSearch + '?res_id=' + currentId;

  $http({
    method: 'GET',
    url: zomatoResSearch,
    headers: {
      'user-key': userkey
    },
    responseType: 'json'

  }).then(function successCallback(response) {
    //$scope.mylist += JSON.stringify(response.data)
    $scope.location = response.data
      //  $scope.mylist = response.data
  }, function errorCallback(response) {
    alert(response.data.message)
  });


  $scope.deleteRestaurant = function(currentId) {
    var mylistURL = "mylist/"

    mylistURL = mylistURL + currentId;

    $http({
      method: 'DELETE',
      url: mylistURL,
      // headers: {
      //   'user-key': userkey
      // },
      responseType: 'HTTP'

    }).then(function successCallback(response) {
      //$scope.mylist += JSON.stringify(response.data)
      alert("success")
        //  $scope.mylist = response.data
    }, function errorCallback(response) {
      alert("no success")
    });

  }
}

angular
  .module('tacoApp')
  .controller('LocationController', LocationController);
