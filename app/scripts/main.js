/* jshint devel:true */
var app = angular.module('app', ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index.html',
      controller: 'HomeController'
    });
}]);

app.controller('HomeController', ['$scope', function ($scope) {
  $scope.organizations = [
    {
      name: "Children's Cancer Foundation",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus leo, sodales placerat lobortis ut, tincidunt volutpat nisl. Sed nisl metus, blandit sed auctor eu, faucibus at neque.'
    },
    {
      name: "Arms Wide Open Foundation",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus leo, sodales placerat lobortis ut, tincidunt volutpat nisl. Sed nisl metus, blandit sed auctor eu, faucibus at neque.'
    }
  ]
}]);
