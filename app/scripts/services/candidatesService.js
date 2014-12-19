app.service('candidatesService', ['baseService', function( baseService ){
    'use strict';
        
    angular.copy(baseService, this);
    
    this.service = 'candidates';
    
        
}]);