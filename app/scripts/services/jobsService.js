app.service('jobsService', ['baseService', function( baseService ){
    
    'use strict';
    
    angular.copy(baseService, this);
    
    this.service = 'jobs';    
        
}]);