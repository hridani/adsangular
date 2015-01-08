adsProject.controller('PublicAdsCtrl',['$scope','adsData','filter',function ($scope,adsData,filter) {
    $scope.totalPages = 0
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 3;

    $scope.$watch('currentPage + totalPages', function () {
       // loadPublicAds(filter.getFilterParams());
    });
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
   $scope.pageChanged=function(){
     //  filter.setPageParams({startPage:0,pageSize:})
     //  adsdata.getPublicAds(filter.getParams())
   };
    $scope.$on('categoryClicked',function(event,category){
        loadPublicAds(filter.getParams());
    });
    $scope.$on('townClicked',function(event,town){
        loadPublicAds(filter.getParams());
    })
}]);
