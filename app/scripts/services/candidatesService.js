'use strict';

app.service('candidatesService', ['$http', function( $http ){
        
    this.service = 'api/candidates.json';
    
    this.load = function(){
        return $http({
            url: this.service,
            method: 'GET'
        });
    };
    
    return this;
        
}]);