app.service('jobsService', ['$http', function( $http ){
    
    this.service = 'api/jobs.json';
    
    this.load = function(){
        return $http({
            url: this.service,
            method: 'GET'
        });        
    };
    
    return this;
        
}]);