//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/blogposts.html',
            controller: 'postViewController'
        })
        .when('/newpost', {
            templateUrl: 'views/newpost.html',
            controller: 'newPostController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
