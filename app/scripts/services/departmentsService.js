app.service("departmentsService", ['$http', function( $http ){
    
    this.service = 'api/departments.json',
    
    this.load = function(){
        return $http({
            url: this.service,
            method: "GET"
        });
    }
    
}]);