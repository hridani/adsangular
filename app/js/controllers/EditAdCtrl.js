adsProject.controller('EditAdCtrl',['$scope','$routeParams','$location','notifyService','adsData','categoriesData','townsData',
    function ($scope, $routeParams, $location,notifyService, adsData,categoriesData,townsData) {

        $scope.isImageVisible=true;
        var changeImage=false;
        var isSendImageUrl=false;

         adsData.getById($routeParams.id)
           .$promise
           .then(function(data){
                 $scope.categories = categoriesData.getCategories();
                 $scope.towns = townsData.getTowns();
                 $scope.adData=data;
            },function(err){
                $scope.adData=null;
            });

        $scope.cancelEdit = function () {
            $location.path('/user/ads');
        };
        $scope.deleteImage = function () {
            changeImage=true;
            isSendImageUrl=false;
            $scope.isImageVisible=false;
            $scope.adData.imageDataUrl=null;

        };
        $scope.changeImage = function () {
            changeImage=true;
            isSendImageUrl=true;

        };
        $scope.editAd = function (adData) {
            var editData={};
            editData.title=$scope.adData.title;
            editData.text=$scope.adData.text;
            editData.changeImage=changeImage;
            editData.categoryId=$scope.adData.categoryId;
            editData.townId=$scope.adData.townId;
            if(isSendImageUrl){
                editData.imageDataUrl=$scope.adData.imageDataUrl;
            }
            adsData.edit($routeParams.id,editData)
                .$promise
                .then(function(data){
                    notifyService.showInfo("Advertisement edited. Don't forget to submit it for publishing");
                    $location.path("/user/ads");
                },function(err){
                    notifyService.showError("Cannot edit ad.")
                });

        };
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
    }]);
