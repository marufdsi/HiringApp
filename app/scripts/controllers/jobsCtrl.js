app.controller('jobsCtrl', ['$scope', 'departmentsService', 'jobs', function($scope, departmentsService, jobs){
    
    $scope.jobs = jobs.data.data; 

    //	Fetching all departments       
    departmentsService.load().then(function( data ){    	
        $scope.departments = data;
    });
    
}]);