'use strict';
adsProject.controller('TownsCtrl', ['$scope', '$rootScope', 'townsData', 'filter', function ($scope, $rootScope, townsData, filter) {
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.townClicked = function (town) {
        $scope.selectedTownId = town;
        filter.filterByTown(town);
        $rootScope.$broadcast('townClicked', town);
    }
}]);
