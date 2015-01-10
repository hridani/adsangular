adsProject.controller('MyAdsCtrl', ['$scope', '$routeParams', '$location', '$filter', 'adsData', 'filter', function ($scope, $routeParams, $location, $filter, adsData, filter) {
    $scope.totalPages = 0
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 5;
    var status = [
        'Inactive',
        'WaitingApproval',
        'Published',
        'Rejected'
    ];
    $scope.statusAd = status;
    $scope.$watch('currentPage + totalPages', function () {
        filter.filterByPage($scope.currentPage);
        loadMyAds(filter.getParams());
    });
    $scope.ready = false;

    filter.setPageParams($scope.currentPage, $scope.numPerPage = 5);

    function getStatusAd(ad) {
        return ad.status;
    }

    function setStatusAd(ad, status) {
        ad.status = status;
    }

    $scope.isInactivAd = function (ad) {
        if (getStatusAd(ad) == status[0]) {
            return true;
        }
        else {
            return false;
        }
    };
    $scope.deactivate = function (ad) {
        setStatusAd(ad, status[0]);
        adsData.deactivateAd(ad.id)
            .$promise
            .then(function (data) {
                $location.path('/user/ads');
            }, function (err) {
                notifyService.showError("Cannot deactivate.", err);
            });
    };
    $scope.publishAgain = function (ad) {
        setStatusAd(ad, status[1]);
        adsData.publishAgain(ad.id)
            .$promise
            .then(function (data) {
                $location.path('/user/ads');
            }, function (err) {
                notifyService.showError("Cannot publish again.", err);
            });
    };

    $scope.delete = function (adId) {

        adsData.delete(adId)
            .$promise
            .then(function (data) {
                $location.path('/user/ads');
            }, function (err) {
                notifyService.showError("Cannot delete.", err);
            });
    };


    function loadMyAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getMyAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.myAdsData = data;
                $scope.totalPages = data.numItems;
                $scope.numPages = data.numPages;
                $scope.ready = true;
            });
    }

    $scope.statusAdsClicked = function (status) {
        $scope.selectedStatus = status;
        $scope.filterStatus = status;
    }

}]);
