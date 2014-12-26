app.service('candidatesService', ['baseService', '$stateParams', function( baseService, $stateParams ){
    'use strict';
        
    angular.copy(baseService, this);
    
    this.service = 'candidates';    
    
        
}]);