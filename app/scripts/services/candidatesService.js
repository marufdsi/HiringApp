app.service('candidatesService', ['baseService', function( baseService ){
    'use strict';
        
    return angular.copy(baseService, {    
        service: 'candidates'
    });
        
}]);