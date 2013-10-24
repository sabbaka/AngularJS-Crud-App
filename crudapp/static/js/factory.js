angular.module('clients').factory('Client', function($http){

var handleErrors = function(serverResponse, status, errorDestination) {

    if (angular.isDefined(errorDestination)) {

        if (status >= 500) {

            errorDestination.form = 'Server Error: ' + status;

        } else if (status >= 401) {

            errorDestination.form = 'Unauthorized Error: ' + status;

        } else {

            var errors = {'errors':{}}

            angular.forEach(serverResponse, function(value, key) {

            if (key != '__all__') {

            errors['errors'][key] = angular.isArray(value) ? value.join("<br/>") : value;

        } else {

            errorDestination.form = errorDestination.form || '' + key + ':' + angular.isArray(value) ? value.join("<br/>") : value;

        }

        });

            angular.extend(errorDestination, errors);

        }

    }

};

var Client = function(data) {
        angular.extend(this,data);
    }
Client.get = function(id) {
    return $http.get('/api/clients/' + id).then(function(response) {
            return new Client(response.data);
        });
    }
Client.prototype.add = function() {
    var clientObj = this;

    return $http.post('/api/clients/', clientObj)

    .success(function(data, status, headres, config) {
        return new Client(data)
        })
    .error(function(data, status, headers, config) {
        handleErrors(data, status, clientObj)
        });
    }
Client.prototype.edit = function() {
    var clientObj = this;

    return $http.put('/api/clients/' + clientObj.id, clientObj)
    .success(function(data,status,headers,config){
        return new Client(data);
    })
    .error(function(data, status, headers, config) {
        handleErrors(data, status, clientObj);
    });

}
Client.prototype.delete = function(id) {
    var ClientObj = this;
    return $http.delete('/api/clients/' + id).then( function(response) {
        return new Client(response.data);
    });
}

return Client;


});