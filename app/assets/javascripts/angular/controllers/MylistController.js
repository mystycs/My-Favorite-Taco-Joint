function MylistController($scope, $http, TacoLocationService) {
  //var test
  //test = TacoLocationService.getMyList()
  //$scope.mylist = test.$$state

  //  $scope.mylist = TacoLocationService.getMyList()
  // //
  // console.log($scope.mylist)

  TacoLocationService.getMyList().then(function(value) {

    $scope.mylist = value
    //alert($scope.mylist)
    // console.log($scope.mylist);
  });

  //$scope.mylist = TacoLocationService.getMyList()

  // $http({
  //   method: 'GET',
  //   url: "/mylist",
  //   responseType: 'json'
  //
  // }).then(function successCallback(response) {
  //   //$scope.mylist = response.data
  //   //getResData(response.data)
  //
  //   $scope.mylist = []
  //
  //   for (var i = 0; i < response.data.length; i++) {
  //     getResData(response.data[i].res_id)
  //   }
  //
  // }, function errorCallback(response) {
  //   alert("no success")
  // });




  // function getResData(resData) {
  //   var zomatoResSearch = "https://developers.zomato.com/api/v2.1/restaurant"
  //
  //   zomatoResSearch = zomatoResSearch + '?res_id=' + resData;
  //
  //   $http({
  //     method: 'GET',
  //     url: zomatoResSearch,
  //     headers: {
  //       'user-key': userkey
  //     },
  //     responseType: 'json'
  //
  //   }).then(function successCallback(response) {
  //     //$scope.mylist += JSON.stringify(response.data)
  //     $scope.mylist.push(response.data)
  //     //  $scope.mylist = response.data
  //   }, function errorCallback(response) {
  //     alert(response.data.message)
  //   });
  //
  // }

  // $scope.deleteRestaurant = function(res_id) {
  //   var mylistURL = "mylist/"
  //
  //   mylistURL = mylistURL + res_id;
  //
  //   $http({
  //     method: 'DELETE',
  //     url: mylistURL,
  //     // headers: {
  //     //   'user-key': userkey
  //     // },
  //     responseType: 'HTTP'
  //
  //   }).then(function successCallback(response) {
  //     //$scope.mylist += JSON.stringify(response.data)
  //     alert("success")
  //       //  $scope.mylist = response.data
  //   }, function errorCallback(response) {
  //     alert("no success")
  //   });
  //
  // }

}

angular
  .module('tacoApp')
  .controller('MylistController', MylistController);
