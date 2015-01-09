adsProject.controller('MyAdsCtrl',['$scope','adsData','filter',function ($scope,adsData,filter) {
    $scope.totalPages = 0
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 5;
     var status=[
        'Inactive',
            'WaitingApproval',
            'Published',
            'Rejected'
    ];
    $scope.statusAd=status;
    $scope.$watch('currentPage + totalPages', function () {
        filter.filterByPage($scope.currentPage);
        loadMyAds(filter.getParams());
    });
    $scope.ready=false;
    filter.setPageParams($scope.currentPage,$scope.numPerPage = 5);

    function loadMyAds(filterParams) {
        filterParams=filterParams || {};
        adsData.getMyAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.myAdsData = data;
                $scope.totalPages = data.numItems;
                $scope.numPages = data.numPages;
                $scope.ready = true;
            });
    }


}]);
