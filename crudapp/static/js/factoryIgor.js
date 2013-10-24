TodoApp.factory('Todo', function($http) {

var Todo = function(data) {

angular.extend(this, data);

}



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


Todo.get = function(id) {

return $http.get('/api/todo/' + id).then(function(response) {

return new Todo(response.data);

});

};


Todo.prototype.create = function() {

var todo = this;

return $http.post('/api/todo/', todo)

.success(function(data, status, headers, config) {

return new Todo(data)})

.error(function(data, status, headers, config) {

handleErrors(data, status, todo);

});

};


Todo.prototype.update = function() {

var todo = this;

return $http.put('/api/todo/' + todo.id, todo)

.success(function(data, status, headers, config) {

return new Todo(data)})

.error(function(data, status, headers, config) {

handleErrors(data, status, todo);

});

};


Todo.prototype.delete = function(id) {

var todo = this;

return $http.delete('/api/todo/' + id).then(function(response) {

return new Todo(response.data);

});

};


return Todo;

});