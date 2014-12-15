
app.controller('sidebarCtrl', ['$scope', '$http', "$window", '$stateParams', 'jobs', function($scope, $http, $window, $stateParams, jobs){
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
    $scope.redirectToQuestionnaires = function(){
        $window.location.hash = '#/job/' + $stateParams.jobID + '/questionnaires';
    }
    $scope.redirectToCandidates = function(){
        $window.location.hash = '#/candidates';
    }
    $scope.job = myJob;
    
}]);

