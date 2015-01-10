adsProject.controller('LoginCtrl',['$scope','$location','notifyService','userData', function($scope,$location,notifyService,userData) {

    $scope.login = function (user) {
       userData.login(user)
           .$promise
           .then(function(data){
               $location.path('/');
           },function error(err) {
               notifyService.showError("Invalid login", err);
           })
    };

    $scope.cancelUser = function () {
        $location.path('/')
    }
}]);
