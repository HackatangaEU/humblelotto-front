"use strict";
/* jshint devel:true */
var app = angular.module('app', ['ngRoute']);

app.filter('moment', function () {
  return function (input, momentFn /*, param1, param2, etc... */) {
    var args = Array.prototype.slice.call(arguments, 2),
        momentObj = moment(input);
    return momentObj[momentFn].apply(momentObj, args);
  };
});

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when('/buy_ticket', {
      templateUrl: './partials/buy_ticket.html',
      controller: 'TicketsController'
    })
    .when('/organizations/:id', {
      templateUrl: './partials/organization.html',
      controller: 'OrganizationsController'
    })
    .otherwise({
      templateUrl: './partials/index.html',
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
  };

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

app.controller('TicketsController', ['$scope', 'OrganizationsFac', '$http', function ($scope, organizationsFac, $http) {

  organizationsFac.getOrganizations().success(function (data) {
    $scope.organizations = data;
    $scope.organizationId = $scope.organizations[0].id;
  });

  $scope.total = 0;

  $scope.value = 2.5;

  $scope.refreshTotal= function () {
    $scope.total = $scope.value * $scope.quantity;
  };

  $scope.submitRaffles = function () {
    var raffle = {
      address: $scope.walletAddress,
      ntickets: $scope.quantity,
      organization: $scope.organizationId
    };
    var url = 'http://pma.etiene.net/humblelotto/?r=payment/pay&address='
    +raffle.address+"&ntickets="
    +raffle.ntickets+"&organization="
    +raffle.organization;
    window.location = url;
    // $http.get(url).success(function (data, status) {
    //   console.log(data);
    //   console.log(status);
    // });
  };

  $scope.change = function (id) {
    $scope.organizationId = id;
    console.log($scope.organizationId);
  };

}]);


app.controller('OrganizationsController', ['$scope', '$routeParams', 'OrganizationsFac', function ($scope, $routeParams, organizationFactory) {
   organizationFactory.getOrganization($routeParams.id).success(function (data) {
     $scope.organization = data;
     console.log(data);
   });
}]);

app.factory("Lotto", function ($http) {
  return $http.get('http://pma.etiene.net/humblelotto/?r=draw/getCurrent');
});

$(document).ready(function () {
  $(".menu-ico").on("click", function () {
    $(".header-nav").toggle({
      duration: 300
    });
  });
});
