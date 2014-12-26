app.service('jobService', ['baseService', function( baseService ){
    
    'use strict';
    
    angular.copy(baseService, this);
    
    this.service = 'job';    
        
}]);