adsProject.controller('EditAdCtrl',['$scope','$routeParams','$location','adsData','categoriesData','townsData',
    function ($scope, $routeParams, $location, adsData,categoriesData,townsData) {
         adsData.getById($routeParams.id)
           .$promise
           .then(function(data){
                 $scope.categories = categoriesData.getCategories();
                 $scope.towns = townsData.getTowns();
                 $scope.adData=data;
            },function(err){
                $scope.adData=null;
            });

        $scope.cancelEdit = function () {
            $location.path('/user/ads');
        }

    }]);
