/**

 * Created by user on 2.1.2015 г..
 */
adsProject.controller('AdsController',function($scope,mainData){
mainData.getAllAds(function(resp){
    $scope.data=resp;
})
mainData.getAllTowns(function(resp){
    $scope.towns=resp;
})

    mainData.getAllCategories(function(resp){
        $scope.categories=resp;
    })
})