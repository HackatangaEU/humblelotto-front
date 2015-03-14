/* jshint devel:true */
var app = angular.module('app', ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when('/buy_ticket', {
      templateUrl: 'partials/buy_ticket.html',
      controller: 'TicketsController'
    })
    .when('/organizations/:organizationId', {
      templateUrl: 'partials/organization.html',
      controller: 'OrganizationsController'
    })
    .otherwise({
      templateUrl: 'partials/index.html',
      controller: 'HomeController'
    });
}]);

app.controller('HomeController', ['$scope', function ($scope) {
  $scope.organizations = [
    {
      id: 1,
      name: "Children's Cancer Foundation",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus leo, sodales placerat lobortis ut, tincidunt volutpat nisl. Sed nisl metus, blandit sed auctor eu, faucibus at neque.'
    },
    {
      id: 2,
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

app.controller('OrganizationsController', ['$scope', function ($scope) {
  $scope.organization = {
    name: "Children's Cancer Foundation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo enim, commodo eu turpis id, tincidunt porta elit. Proin quis mi in nisi tincidunt egestas sit amet nec libero. Etiam fringilla gravida purus sit amet vulputate. Aenean vitae neque ac ex iaculis vestibulum sed at augue. Quisque nec lacinia felis. Vestibulum at nibh eu enim malesuada molestie. Nulla gravida elementum lorem, id suscipit quam bibendum sed. Fusce nec risus nec lectus commodo dignissim eget a lectus. Aenean molestie, arcu vitae fermentum dictum, ante lacus malesuada ante, ut molestie erat tellus eget purus. </br>Morbi maximus dolor turpis, et tristique purus efficitur ut. Donec sed justo dignissim, eleifend leo nec, accumsan diam. Etiam facilisis, dolor id sollicitudin auctor, nibh purus consectetur nulla, vel tincidunt ligula augue eget ipsum. Maecenas sollicitudin quis ipsum ut bibendum. Phasellus id tempus nulla. Maecenas interdum cursus augue, id consectetur sem posuere sit amet.Sed ex tortor, tempus vitae risus fringilla, dignissim dignissim lectus. Curabitur eu dui erat. Suspendisse iaculis massa pharetra sapien varius fermentum. Aenean accumsan risus nec lacinia cursus. Vestibulum varius, velit eget blandit bibendum, libero ante pulvinar erat, nec lobortis libero lorem sed mi. Duis eu justo tincidunt, tincidunt turpis nec, iaculis turpis. Aenean placerat tempor gravida. Sed turpis lectus, mollis at nisi a, faucibus imperdiet dui. In egestas ipsum a ante bibendum, at sodales lorem lobortis. In semper dolor lorem, imperdiet dignissim lacus mattis id. Quisque sodales nibh eu elementum pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vehicula mauris quis justo consectetur suscipit."
  }
}]);
