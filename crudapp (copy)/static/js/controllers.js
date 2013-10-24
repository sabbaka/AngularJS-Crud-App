'use strict';



function ClientsList($scope, $http, Client){
    $scope.client = {};
    $scope.clientEdit = {};

    var getClients = function() {
         //$http.get('/api/clients/').success( function(data) { $scope.data = data;} );
         Client.get("").then( function(data) { $scope.data = data;} );
        }

    getClients();


    $scope.getclient = function(id) {
        Client.get(id).then(function(data){$scope.client = data});
        }


    $scope.editClient = function(id, clientEdit) {

            $http.put('/api/clients/' + id, clientEdit).success( function() {$scope.editClientModal = false;getClients();} );
        }
    $scope.editIdSet = function(id) {
            /*var editId = 0;
            editId = id;
            $scope.clientEdit = */

            $http.get('/api/clients/' + id).success( function(data) { $scope.clientEdit = data; });
            $scope.editClientModal = true;


        }
    $scope.addClient = function() {
            $http.post('/api/clients/', $scope.client).success(function(){$scope.addClientModal = false; $scope.client = {}; getClients();}).            error(function(data)
            {
                $scope.addClientErrors = data;
            });

        }
    $scope.removeClient = function(id) {
            $http.delete('/api/clients/' + id).success(function(){$scope.deleteClientModal = false;$scope.deleteId = null;getClients();}).error(function(data)
            {
                $scope.deleteClientErrors = data;
            });

        }
    $scope.removeIdSet = function(id) {
            $scope.removeid = id;
        }

    $scope.opts = {
        backdropFade: true,
        dialogFade:false
      }



    $scope.deleteIdSet = function(id){ $scope.deleteId = id; $scope.deleteClientModal = true; }



    }


