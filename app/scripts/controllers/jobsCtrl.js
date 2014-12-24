app.controller('jobsCtrl', ['$scope', '$rootScope','departmentsService', 'jobsResolver', 'jobsService', '$modal', function($scope, $rootScope, departmentsService, jobsResolver, jobsService, $modal){
    
    //  Initializing Models
    $scope.query = {};
    $scope.departments = [];
    $scope.jobs = jobsResolver.data.data; 
    $scope.sortOrder = ['Date', 'Recruit End Date']; 
    $scope.sortSelected = 'Sort By Date'; 
    $scope.selectedDept = {'id': 0, 'department_name': 'All department'};

    //	Fetching all departments       
    departmentsService.load().then(function( data ){    	
        $scope.departments = data.data.data;
    });    
    
    //  actions
    $scope.sortBy = function( selection ){        
        $scope.query.sort = selection;
        $scope.fetchJobs();
    };
    $scope.selectDepartment = function( dept ){
        $scope.query.department = dept.id;        
        $scope.fetchJobs();
    };
    $scope.fetchJobs = function(){
        jobsService.params = $scope.query;
        jobsService.load().then(function(data){
            $scope.jobs = data.data;
        });
    }
    
    /*
    *   Events
    */
    $rootScope.$on( $rootScope.events.LOG_OUT, function(){            
        console.log('Logget Out from jobs controller');
    });
    
}]);