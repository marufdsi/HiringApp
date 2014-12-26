app.service('questionnairesService', ['baseService', function( baseService ){
    
    'use strict';
    
    angular.copy(baseService, this);
    
    this.service = 'questionnaires';    
        
}]);