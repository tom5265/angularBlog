//The action to call the local API should be here

var factories = angular.module('myApp.factories', []);

factories.factory('PostGetter', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/posts/:id');
}]);

