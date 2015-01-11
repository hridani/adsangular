'use strict';
adsProject.controller('DeleteAdCtrl',['$scope','$routeParams','$location','notifyService','adsData','categoriesData','townsData',
    function ($scope, $routeParams, $location,notifyService, adsData,categoriesData,townsData) {
        adsData.getById($routeParams.id)
            .$promise
            .then(function(data){
                $scope.categories = categoriesData.getCategories();
                $scope.towns = townsData.getTowns();
                $scope.adData=data;
            },function(err){
                $scope.adData=null;
            });

        $scope.cancelDelete = function () {
            $location.path('/user/ads');
        };

        $scope.delete = function (adId) {
            adsData.delete(adId)
                .$promise
                .then(function (data) {
                    notifyService.showInfo("Advertisement deleted.");
                    $location.path('/user/ads');

                }, function (err) {
                    notifyService.showError("Cannot delete.", err.data);
                });
        }
    }]);
