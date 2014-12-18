
app.controller('sidebarCtrl', ['$scope', '$http', "$window", '$stateParams', 'job', function($scope, $http, $window, $stateParams, job){
    $scope.job = job.data.data;
    $scope.redirectToQuestionnaires = function(){
        $window.location.hash = '#/job/' + $stateParams.jobID + '/questionnaires';
    };
    $scope.redirectToCandidates = function(){
        $window.location.hash = '#/candidates';
    };
    
}]);

