var userkey = "4e44174751d2676221b5e9cc41451047" // zomato api key

angular
  .module('tacoApp', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.html',
        controller: 'HomeController'
      })
      .state('list', {
        url: '/mylist',
        templateUrl: 'home/mylist.html',
        controller: 'MylistController'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'home/about.html',
      })
      .state('itsrainingtacos', {
        url: '/itsrainingtacos',
        templateUrl: 'home/itsrainingtacos.html',
      })
      .state('list.location', {
        url: '/location/:id',
        templateUrl: 'home/location.html',
        controller: 'LocationController'
      })
    $urlRouterProvider.otherwise('/');
  });
