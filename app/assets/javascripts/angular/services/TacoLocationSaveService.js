function TacoLocationSaveService($http, $window) {

  this.saveRestaurant = function(res_id) {
    var myListSaveUrl = "/mylist?res_id="
    myListSaveUrl = myListSaveUrl + res_id

    return $http({
      method: 'POST',
      url: myListSaveUrl,
      responseType: 'json'
    }).then(function successCallback(response) {
      alert("success")

    }, function errorCallback(response) {
      alert("no success")
    });
  }

  this.deleteRestaurant = function(res_id) {
    var mylistURL = "mylist/"
    mylistURL = mylistURL + res_id

    return $http({
      method: 'DELETE',
      url: mylistURL,
      responseType: 'HTTP'

    }).then(function successCallback(response) {
      alert("success")
      // $window.location.href = '/#/mylist';
      // $window.location.reload();
    }, function errorCallback(response) {
      alert("no success")
    });
  }


}

angular
  .module('tacoApp')
  .service('TacoLocationSaveService', TacoLocationSaveService);
