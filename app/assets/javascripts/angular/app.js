angular
  .module('tacoApp', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
       .state('home', {
         url: '/',
         templateUrl: 'navbar/navbar.html',
         controller: 'HomeController as ctrl'
       })
    $urlRouterProvider.otherwise('/');
  });
