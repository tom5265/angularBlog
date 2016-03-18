//Logic for page actions here. 

var controllers = angular.module('myApp.controllers', []);

controllers.controller('postViewController', ['$scope', 'PostGetter', function($scope, PostGetter) {
   
    $scope.getPosts = function() {
        PostGetter.query().then(function(posts) {
            $scope.posts = posts;
        })
    }
    
}]);


