'use strict';

/* App Module */
/* var app = angular.module('angularjs-starter', ['$strap.directives']); */

angular.module('clients', ['ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'static/partials/base.html',   controller: 'ClientsList'}).
      otherwise({redirectTo: '/'});
}]);

/*
clients.filter('isEvenN', function() {
        return function(input){
            var list = [];

            angular.forEach(input, function(value, key){

                if(value.id % 2 == 0){
                        list.push(value);
                    }

            });
            return list;

            }
    });*/








