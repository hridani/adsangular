adsProject.controller('RegisterCtrl', ['$scope', '$location', 'notifyService','townsData', 'userData', function ($scope, $location,notifyService, townsData, userData) {
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user)
            .$promise
            .then(function(data){
                notifyService.showInfo("User registered successfully.");
                $location.path("/");
            },function(err){
                notifyService.showError("User registration failed", err);
            }
        );
    };

    $scope.cancelRegister = function () {
        $location.path('/')
    }
}]);

