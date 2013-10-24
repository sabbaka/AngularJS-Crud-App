clients.factory('Client', function($http){


var Client = function(data) {
        angular.extend(this,data);
    }

Client.get = function(id) {
    return $http.get('/api/clients/' + id).then(function(response) {
            return new Client(response.data);
        });
    };

return Client;


});
