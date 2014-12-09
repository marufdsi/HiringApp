app.controller('jobsCtrl', ['$scope', 'jobs', function($scope, jobs){
    
    $scope.jobs = jobs.data.data;        
    
}]);