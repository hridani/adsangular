/**
 * Created by user on 4.1.2015 г..
 */
adsProject.controller('PaginationCtrl', function ($scope, mainData) {
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

    mainData.getAllTowns(function (resp) {
        $scope.towns = resp;
    })

    mainData.getAllCategories(function (resp) {
        $scope.categories = resp;
    })
});


