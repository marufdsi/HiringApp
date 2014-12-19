app.service("departmentsService", ['baseService', function( baseService ){
    
    'use strict';
    
    angular.copy(baseService, this);
    
    this.service = 'departments';        
    
    
}]);