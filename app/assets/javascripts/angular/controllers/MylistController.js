function MylistController($scope, $http, TacoLocationService, TacoLocationSaveService) {

  // var votes = 0;

  TacoLocationService.getMyList().then(function(value) {
    $scope.mylist = value
    console.log($scope.mylist)

    // for(i = 0; i < value.length; i++){
    //   // console.log("test")
    //   // $scope.mylist[i].upVotes = 0;
    //
    // }

  });

  $scope.deleteRestaurant = function(res_id) {
    TacoLocationSaveService.deleteRestaurant(res_id)
    TacoLocationService.getMyList().then(function(value) {
      $scope.mylist = value
    });
  }

  $scope.upVote = function(list) {
    list.upVotes += 1;
  }


}

angular
  .module('tacoApp')
  .controller('MylistController', MylistController);
