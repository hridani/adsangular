/**
 * Created by user on 4.1.2015 г..
 */
adsProject.controller('PaginationCtrl', function ($scope, $rootScope, mainData,adsParams) {
$scope.adsParams=adsParams;

    $scope.totalPages = 0
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 3;

    $scope.reloadAds = function () {
        mainData.getCategoryAndTownWithPaging($scope.adsParams.categoryId, $scope.adsParams.townId, $scope.currentPage, function (resp) {
            $scope.data = resp;
            $scope.totalPages = resp.numItems;
            $scope.numPages = resp.numPages;
        });
    };

    $scope.$watch('currentPage + totalPages', function () {
        $scope.reloadAds();
    });

    $scope.$on("categorySelectionChanged", function (event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;

    });


    $scope.$on("townSelectionChanged", function (event, selectedTownId) {
        $rootScope.adsParams.townId = selectedTownId;
        $scope.reloadAds();
    });

});


