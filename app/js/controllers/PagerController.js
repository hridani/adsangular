/**
 * Created by user on 4.1.2015 г..
 */
adsProject.controller('PaginationCtrl', function ($scope,rootScope, mainData) {
    $scope.totalPages = 0
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 3;


    $scope.$watch('currentPage + numPerPage', function () {
        mainData.getAllAdsWithPaging($scope.currentPage, function (resp) {
            $scope.data = resp;
            $scope.totalPages = resp.numItems;
            $scope.numPages = resp.numPages;
        });
    });

    $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;
        $scope.reloadAds();
    });


    $scope.$on("townSelectionChanged", function(event, selectedTownId) {
        $scope.adsParams.townId = selectedTownId;
        $scope.reloadAds();
    });

});


