adsProject.controller('PublicAdsCtrl',['$scope','adsData','filter',function ($scope,adsData,filter) {
    $scope.totalPages = 45
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 3;

    $scope.$watch('currentPage + totalPages', function () {
        filter.filterByPage($scope.currentPage);
       loadPublicAds(filter.getParams());
    });
    $scope.ready=false;
    filter.setPageParams($scope.currentPage,$scope.numPerPage = 5);
    loadPublicAds();
    function loadPublicAds(filterParams) {
        filterParams=filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.totalPages = data.numItems;
                $scope.numPages = data.numPages;
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
