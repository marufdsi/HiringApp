app.controller('jobsCtrl', ['$scope', 'departmentsService', 'jobs', function($scope, departmentsService, jobs){
    
    $scope.jobs = jobs.data.data;        
    departmentsService.load().then(function( data ){
        $scope.departments = data;
    });
    
}]);