function TacoLocationSaveService($http) {

  this.saveRestaurant = function(res_id) {

    return $http({
      method: 'POST',
      url: "/mylist?res_id=" + res_id,
      responseType: 'json'
    }).then(function successCallback(response) {
      alert("success")

    }, function errorCallback(response) {
      alert("no success")
    });
  }

  this.deleteRestaurant = function(res_id) {
    var mylistURL = "mylist/"

    mylistURL = mylistURL + res_id;

    return $http({
      method: 'DELETE',
      url: mylistURL,
      responseType: 'HTTP'

    }).then(function successCallback(response) {
      alert("success")
    }, function errorCallback(response) {
      alert("no success")
    });
  }
}

angular
  .module('tacoApp')
  .service('TacoLocationSaveService', TacoLocationSaveService);
