var CreateCtrl = function ($scope, $location, Todo) {
$scope.btnName = "Add";
$scope.item = new Todo();

$scope.save = function() {
$scope.item.create().then(function(data) {
$location.path('/');
});
};

};

var EditCtrl = function ($scope, $routeParams, $location, Todo) {
Todo.get($routeParams.itemId).then(function(data) {
$scope.item = data;
});
$scope.btnName = "Edit";
$scope.save = function () {
$scope.item.update().then(function(data) {
$location.path('/');
});
};
};