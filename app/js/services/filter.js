adsProject.factory('filter', function () {
    var params = {};

    function filterByCategory(category) {
        params.categoryId = category
    }

    function filterByTown(town) {
        params.townId = town;
    }

    function getParams() {
        return params;
    }
    function setPageParams(pageParams) {
        return params;
    }
    return {
        filterByCategory: filterByCategory,
        filterByTown: filterByTown,
        getParams: getParams,
        setPageParams:setPageParams
    }
});
