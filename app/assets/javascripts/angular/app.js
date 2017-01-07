var userkey = "4e44174751d2676221b5e9cc41451047" // zomato api key

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
      // .state('list.location', {
      //   url: '/location',
      //   //url: '/location/:id',
      //   templateUrl: 'home/location.html',
      //   //controller: 'LocationController'
      //   // resolve: {
      //   //   post: function($stateParams, PostsService) {
      //   //     return PostsService.getPost($stateParams.id);
      //   //   }
      //   // }
      // })
      .state('list.location', {
        url: '/location/:id',
        templateUrl: 'home/location.html',
        controller: 'LocationController'
        // resolve: {
        //   post: function($stateParams, PostsService) {
        //     return PostsService.getPost($stateParams.id);
        //   }
        // }
      })
    $urlRouterProvider.otherwise('/');
  });
