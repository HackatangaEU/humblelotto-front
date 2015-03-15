/* jshint devel:true */
var app = angular.module('app', ['ngRoute']);

app.filter('moment', function () {
  return function (input, momentFn /*, param1, param2, etc... */) {
    var args = Array.prototype.slice.call(arguments, 2),
        momentObj = moment(input);
    return momentObj[momentFn].apply(momentObj, args);
  };
})

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when('/buy_ticket', {
      templateUrl: 'partials/buy_ticket.html',
      controller: 'TicketsController'
    })
    .when('/organizations/:id', {
      templateUrl: 'partials/organization.html',
      controller: 'OrganizationsController'
    })
    .otherwise({
      templateUrl: 'partials/index.html',
      controller: 'HomeController'
    });
}]);

app.factory("OrganizationsFac", function ($http) {
  var dataFactory = {};

  dataFactory.getOrganizations = function () {
    return $http.get('http://pma.etiene.net/humblelotto/?r=organization/getList');
  };

  dataFactory.getOrganization = function (id) {
    return $http.get('http://pma.etiene.net/humblelotto/?r=organization/show&id=' + id);
  }

  return dataFactory;
});

app.controller('HomeController', ['$scope', 'OrganizationsFac', 'Lotto', function ($scope, Organizations, Lotto) {
  $scope.lotto = {
    sum: 500
  };

  Organizations.getOrganizations().success(function (data) {
    $scope.organizations = data;
  });

  Lotto.success(function (data) {
    $scope.lotto = data;
    console.log(data);
  });

}]);

app.controller('TicketsController', ['$scope', function ($scope) {
  $scope.total = 0;
  $scope.quantity = 0;
  $scope.value = 2.5;
  $scope.refreshTotal= function () {
    $scope.total = $scope.value * $scope.quantity;
  }
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

app.controller('OrganizationsController', ['$scope', '$routeParams', 'OrganizationsFac', function ($scope, $routeParams, organizationFactory) {
   organizationFactory.getOrganization($routeParams.id).success(function (data) {
     $scope.organization = data;
     console.log(data);
   });
}]);

app.factory("Lotto", function ($http) {
  return $http.get('http://pma.etiene.net/humblelotto/?r=draw/getCurrent')
})

$(document).ready(function () {
  $(".menu-ico").on("click", function () {
    $(".header-nav").toggle({
      duration: 300
    });
  })
});
