adsProject.controller('RegisterCtrl',['$scope','$location','townsData','userData', function($scope,$location,townsData,userData) {
   townsData.getTowns()
       .$promise
       .then(function (data){
           $scope.towns=data;
           console.log( $scope.towns);
       });
    $scope.register=function(user){
        console.log(user);
        userData.register(user);
    };

    $scope.cancelRegister = function () {
        $location.path('/')
    }
    }]);

