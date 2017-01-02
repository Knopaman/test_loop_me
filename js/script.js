var app = angular.module('app', []);

app.controller('myBooksCtrl', function($scope){
    $scope.showBook = function() {
        console.log('This is SomeBook')
    }
});

app.controller('angularBooksCtrl', function($scope){
    $scope.showBook = function() {
        console.log('This is AngularBook')
    }
});

app.controller('emberBooksCtrl', function($scope){

});