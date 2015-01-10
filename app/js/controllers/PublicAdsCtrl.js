adsProject.controller('PublicAdsCtrl', ['$scope', 'notifyService', 'adsData', 'filter', function ($scope, notifyService, adsData, filter) {
    $scope.totalPages = 0
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 5;

    $scope.$watch('currentPage + totalPages', function () {
        filter.filterByPage($scope.currentPage);
        loadPublicAds(filter.getParams());
    });
    $scope.ready = false;
    filter.setPageParams($scope.currentPage, $scope.numPerPage = 5);
    loadPublicAds();
    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.totalPages = data.numItems;
                $scope.numPages = data.numPages;
                $scope.ready = true;
            }, function error(err) {
                notifyService.showError("Cannot load ads", err);
            });
    }

    $scope.$on('categoryClicked', function (event, category) {
        loadPublicAds(filter.getParams());
    });
    $scope.$on('townClicked', function (event, town) {
        loadPublicAds(filter.getParams());
    })
}]);
