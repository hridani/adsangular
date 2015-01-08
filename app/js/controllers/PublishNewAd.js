adsProject.controller('PublishNewAdCtrl', ['$scope','$rootScope','$location','adsData','categoriesData','townsData','notifyService',
    function ($scope,$rootScope,$location,adsData,categoriesData,townsData,notifyService) {

    $scope.adData = {townId: null, categoryId: null};
    $scope.categories = categoriesData.getCategories();
    $scope.towns = townsData.getTowns();

    $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.publishAd = function(adData) {
        adsData.create(adData)
            .$promise
            .then(function(data){
                notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                $location.path("/user/ads");
            },function(){
                notifyService.showInfo("Publish ad failed");
            }
         );
    };
}]);