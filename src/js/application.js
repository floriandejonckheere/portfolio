/**
 * application.js
 *
 * */

var site = angular.module('site', [
  'ngRoute',
  'ngAnimate'
]);

site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      activeTab: 'cover',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      activeTab: 'about'
    })
    .when('/portfolio', {
      templateUrl: 'templates/portfolio.html',
      activeTab: 'portfolio'
    })
    .when('/links', {
      templateUrl: 'templates/links.html',
      activeTab: 'links'
    })
    .when('/contact', {
      templateUrl: 'templates/contact.html',
      activeTab: 'contact'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

site.controller('mainController', function($scope, $route) {
  $scope.$route = $route;
});
