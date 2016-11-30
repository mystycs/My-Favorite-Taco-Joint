angular
  .module('tacoApp', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
       .state('home', {
         templateUrl: 'navbar/navbar.html',
         controller: 'HomeController as ctrl'
       })
       .state('home.index', {
         url: '/',
         templateUrl: 'home/index.html',
         controller: 'HomeController as ctrl'
       })
    $urlRouterProvider.otherwise('/');
  });
