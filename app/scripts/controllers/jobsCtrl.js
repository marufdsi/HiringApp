app.controller('jobsCtrl', ['$scope', 'departmentsService', 'jobs', function($scope, departmentsService, jobs){
    
    $scope.departments = [];
    $scope.jobs = jobs.data.data; 
    $scope.sortOrder = ['Date', 'Recruit End Date']; 
    $scope.sortSelected = 'Sort By Date'; 
    $scope.selectedDept = {'id': 0, 'department_name': 'All department'};

    //	Fetching all departments       
    departmentsService.load().then(function( data ){    	
        $scope.departments = data.data.data;
    });
    
    //  actions
    $scope.sortBy = function( selection ){
        console.log( selection );
    };
    $scope.selectDepartment = function( dept ){
        $scope.selectedDept = dept;
    };
    $scope.fetchJobs = function(){
        alert('Fetching');
    }
    
}]);