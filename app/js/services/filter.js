'use strict';
adsProject.factory('filter', function () {
    var params = {};

    function filterByCategory(category) {
        params.categoryId = category
    }

    function filterByTown(town) {
        params.townId = town;
    }

    function filterByPage(page){
        params.startPage=page;
    }

    function setAdsPerPage(numParPage){
        params.pageSize=numParPage;
    }
    function getParams() {
        return params;
    }
    function setPageParams(startPage,pageSize) {
        params.startPage=startPage;
        params.pageSize=pageSize;
    }
    return {
        filterByCategory: filterByCategory,
        filterByTown: filterByTown,
        filterByPage:filterByPage,
        getParams: getParams,
        setAdsPerPage: setAdsPerPage,
        setPageParams:setPageParams
    }
});
