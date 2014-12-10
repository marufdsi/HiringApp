
app.controller('sidebarCtrl', ['$scope', '$http', '$stateParams', 'jobs', function($scope, $http, $stateParams, jobs){
    var jobscollection = jobs.data.data;
    var myJob;
    $.each(jobscollection, function(index, jobs){
        $.each(jobscollection[index].jobs, function(ind, value){
            if(jobscollection[index].jobs[ind].id == $stateParams.jobID){
                myJob = value;
                return;
            }
        });
    });
    $scope.job = myJob;
    
}]);

