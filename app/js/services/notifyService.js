adsProject.factory('notifyService', function () {
    function showInfo(msg){
        noty({
                text: msg,
                type: 'info',
                layout: 'topCenter',
                timeout: 1000}
        );
    }
    function showError(){

    }
return{
    showInfo:showInfo,
    showError:showError
}
});