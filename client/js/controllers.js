//Logic for page actions here. 

var controllers = angular.module('myApp.controllers', []);

controllers.controller('postViewController', ['$scope', 'PostGetter', function($scope, PostGetter) {

    $scope.getPosts = function() {
        PostGetter.query().$promise.then(function(data) {
            $scope.posts = data;
        })
    }
    $scope.getPosts();
}]);


controllers.controller('newPostController', ['$scope', '$location', 'PostGetter', function($scope, $location, PostGetter) {
    $scope.clearForms = function() {
        $scope.titleInput = '';
        $scope.authorInput = '';
        $scope.contentInput = '';
    }

    $scope.addPost = function() {
        var newPost = {
            title: $scope.titleInput,
            author: $scope.authorInput,
            content: $scope.contentInput
        }
        PostGetter.save(newPost).$promise.then(function() {
            $scope.clearForms()
        }
        ).then(function() {
            $location.path('/')
        });
    }
}])

controllers.controller('SinglePostControl', ['$scope', '$routeParams', 'PostGetter', function($scope, $routeParams, PostGetter) {
   var postId = $routeParams.id;
    $scope.getPosts = function() {
        PostGetter.get({ id: postId }).$promise.then(function(data) {
            $scope.post = data;
        })
    }
    $scope.getPosts();
}]);