adsProject.controller('LoginCtrl',['$scope','$route','$location','userData', function($scope,$route,$location,userData) {
    console.log($route.controller);
    $scope.login = function (user) {
       userData.login(user)
           .$promise
           .then(function(data){
               $location.path('/')
           })
    };

    $scope.cancelUser = function () {

    }
}]);
