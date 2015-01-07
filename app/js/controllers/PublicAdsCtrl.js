adsProject.controller('PublicAdsCtrl',['$scope','adsData','filter',function ($scope,adsData,filter) {
    $scope.ready=false;
    loadPublicAds();
    function loadPublicAds(filterParams) {
        filterParams=filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            });
    }

    $scope.$on('categoryClicked',function(event,category){
        loadPublicAds(filter.getFilterParams());
    });
    $scope.$on('townClicked',function(event,town){
        loadPublicAds(filter.getFilterParams());
    })
}]);
