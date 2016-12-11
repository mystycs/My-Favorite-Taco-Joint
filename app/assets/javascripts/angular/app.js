angular
  .module('tacoApp', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.html',
        controller: 'HomeController as ctrl'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'home/list.html',
        controller: 'HomeController as ctrl'
      })
    $urlRouterProvider.otherwise('/');
  });
