adsProject.controller('CategoriesAndTownsCtrl', function ($scope,$rootScope,mainData) {

    mainData.getAllTowns(function (resp) {
        $scope.towns = resp;
    })

    mainData.getAllCategories(function (resp) {
        $scope.categories = resp;
    })

    $scope.categoryClicked = function(item) {
        var clickedCategoryId =  item.attributes['data-id'].value;
        $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
    }

    $scope.townClicked = function(item) {
        var clickedTownId = item.attributes['data-id'].value;
        $rootScope.$broadcast("townSelectionChanged", clickedTownId);
    };
});
