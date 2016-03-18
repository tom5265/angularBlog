//Logic for page actions here. 

var controllers = angular.module('myApp.controllers', []);

controllers.controller('postViewController', ['$scope', 'PostGetter', function($scope, PostGetter) {

    $scope.getPosts = function() {
        PostGetter.query().then(function(data) {
            $scope.posts = data;
        })
        $scope.getPosts();
    }
}]);


controllers.controller('newPostController', ['$scope', 'PostGetter', function ($scope, PostGetter) {
    $scope.addPost = function() {
        var newPost = {
            title: $scope.titleInput,
            author: $scope.authorInput,
            content: $scope.contentInput
        }
        PostGetter.post(newPost);
    }
}])