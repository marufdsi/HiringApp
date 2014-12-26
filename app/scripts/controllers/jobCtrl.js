app.controller('jobCtrl', ['$scope', '$stateParams', 'job', function($scope, $stateParams, job){
    
    $scope.job = job.data.data;
    
}]);

app.controller('questionnairesCtrl', ['$scope', '$stateParams', '$modal', 'questions', function($scope, $stateParams, $modal, questions){
    $scope.questions = questions.data.Questionnaires.Questions;
    $scope.jobTitle = questions.data.Questionnaires.job_title;
    console.log( $stateParams );
    $scope.myToggleButtonInfo = {
      "icon"  : "glyphicon glyphicon-plus",
      "name"  : "Add question",
      "listItems" : [{
                        "name"  : "Create New",
                        "link"  : "createNew",
                        "clickAction" : function(){
                                $modal.open({
                                    controller: 'addNewQuestionCtrl',
                                    templateUrl: 'templates/job/questionnaires/add-new-question.html'
                                });
                        }
                    },
                    {
                        "name"  : "Create from template",
                        "link"  : "createFromTemplate()",
                        "clickAction" : function(){
                                $modal.open({
                                    controller: 'addNewQuestionCtrl',
                                    templateUrl: 'templates/job/questionnaires/question-bank.html'
                                });
                        }
                    }]
    };
    $scope.rate=0;
    $scope.max = 10;
}]);

app.controller('addNewQuestionCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance){
        $scope.addQuestion = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
}]);