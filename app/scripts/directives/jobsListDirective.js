app.directive('jobsList', function(){
    
    return {
        restrict: 'EA',
        templateUrl: 'templates/directives/jobs-list.html',
        scope: { model: '=' },
        controller: [ '$scope', function( $scope ){
            $scope.jobs = $scope.model;
            
            /*
             *  actions
             */
            $scope.totalInterviewed = function( model ){
                console.log( model );
            };
        }]
    };
    
});