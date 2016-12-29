function MylistController($scope, $http) {

  $http({
    method: 'GET',
    url: "/mylist",
    responseType: 'json'

  }).then(function successCallback(response) {
    //$scope.mylist = response.data
    //getResData(response.data)

    $scope.mylist = []
    for (var i = 0; i < response.data.length; i++) {
      getResData(response.data[i].res_id)
    }

  }, function errorCallback(response) {
    alert("no success")
  });


  function getResData(resData) {
    var zomatoResSearch = "https://developers.zomato.com/api/v2.1/restaurant"

    zomatoResSearch = zomatoResSearch + '?res_id=' + resData;

    $http({
      method: 'GET',
      url: zomatoResSearch,
      headers: {
        'user-key': userkey
      },
      responseType: 'json'

    }).then(function successCallback(response) {
      //$scope.mylist += JSON.stringify(response.data)
      $scope.mylist.push(response.data)
        //  $scope.mylist = response.data
    }, function errorCallback(response) {
      alert(response.data.message)
    });

  }

}

angular
  .module('tacoApp')
  .controller('MylistController', MylistController);
