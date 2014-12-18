app.controller('jobCtrl', ['$scope', '$stateParams', 'job', function($scope, $stateParams, job){
    
    $scope.job = job.data.data;
    
}]);

app.controller('questionnairesCtrl', ['$scope', '$stateParams', 'questions', function($scope, $stateParams, questions){
    $scope.questions = questions.data.Questionnaires.Questions;
    $scope.jobTitle = questions.data.Questionnaires.job_title;
    console.log( $stateParams );
    $scope.mtToggleButtonInfo = {
      "icon"  : "glyphicon glyphicon-plus",
      "name"  : "Add question",
      "listItems" : [{
                        "name"  : "Create New",
                        "link"  : ""
                    },
                    {
                        "name"  : "Create from template",
                        "link"  : ""
                    }]
    };
    $scope.rate=0;
    $scope.max = 10;
}]);