app.service('userInfoService', ['baseService', function(baseService) {

    'use strict';

    angular.copy(baseService, this);

    this.service = 'userInfo';

    this.syncLoad = function() {
        return $.ajax({
            url: this._getService(),
            async: false            
        });
    };

}]);