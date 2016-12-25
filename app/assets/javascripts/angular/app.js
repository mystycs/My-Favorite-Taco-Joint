angular
  .module('tacoApp', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.html',
        controller: 'HomeController'
          // resolve: {
          // posts: function(HomeService){
          //   return HomeService.getLocations()
          // }
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
    $urlRouterProvider.otherwise('/');
  });
