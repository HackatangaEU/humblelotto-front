/* jshint devel:true */
var app = angular.module('app', ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when('/buy_ticket', {
      templateUrl: 'partials/buy_ticket.html',
      controller: 'TicketsController'
    })
    .otherwise({
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

app.controller('TicketsController', ['$scope', function ($scope) {
  $scope.total = 0;
  $scope.quantity = 0;
  $scope.value = 2.5;
  $scope.refreshTotal= function () {
    $scope.total = $scope.value * $scope.quantity;
  }
}]);
