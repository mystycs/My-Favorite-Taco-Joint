function MylistController($scope, $http) {

  $http({
    method: 'GET',
    url: "/mylist",
    responseType: 'json'

  }).then(function successCallback(response) {
    $scope.mylist = response.data
  }, function errorCallback(response) {
    alert("no success")
  });

}

angular
  .module('tacoApp')
  .controller('MylistController', MylistController);
