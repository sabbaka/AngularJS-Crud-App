'use strict';

/* App Module */
/* var app = angular.module('angularjs-starter', ['$strap.directives']); */

var clients = angular.module('clients', ['ui.bootstrap', 'ui.bootstrap.dialog']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'static/partials/base.html',   controller: ClientsList}).
      otherwise({redirectTo: '/'});

}]);








