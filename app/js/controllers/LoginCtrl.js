adsProject.controller('LoginCtrl',['$scope','$location','userData', function($scope,$location,userData) {

    $scope.login = function (user) {
       userData.login(user)
           .$promise
           .then(function(data){
               $location.path('/user/home')
           })
    };

    $scope.cancelUser = function () {
        $location.path('/')
    }
}]);
