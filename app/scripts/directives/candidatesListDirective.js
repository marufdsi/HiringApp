app.directive('candidateList', function() {

    return {
        restrict: 'EA',
        templateUrl: 'templates/directives/candidates-list.html',
        controller: ['$scope', '$modal', function($scope, $modal) {
            
            //  Actions
            $scope.recommendModal = function(candidate) {
                app.candidate = candidate;
                $modal.open({
                    templateUrl: 'templates/job/candidates/recommend-candidate-modal.html',
                    controller: ['$scope', 'appConfigFactory', function($scope, appConfigFactory) {
                            $scope.candidate = app.candidate;
                            $scope.PROFILE_THUMB = appConfigFactory.PROFILE_THUMB;

                            $scope.ok = function() {
                                alert('OK');
                            }
                        }]
                });
            };
            
        }]
    }

});