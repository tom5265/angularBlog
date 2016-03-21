//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'ngRoute', 'ngResource']);
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
        .when('/:id', {
            templateUrl: 'views/singlepost.html',
            controller: 'SinglePostControl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
