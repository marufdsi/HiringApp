app.controller('candidatesCtrl', ['$scope', 'candidatesResolve', 'appConfigFactory', '$modal', function( $scope, candidatesResolve, appConfigFactory, $modal ){    
    'use strict';
    
    $scope.candidates = candidatesResolve.data.data;
    $scope.max = 10;
    $scope.candidate_image_dir = appConfigFactory.CANDIDATE_IMG;
    $scope.candidate_resume_dir = appConfigFactory.CANDIDATE_RESUME;
    $scope.profile_thumb = appConfigFactory.PROFILE_THUMB;
    $scope.profile_icon = appConfigFactory.PROFILE_ICON;
    
    
    $scope.recommendModal = function( candidate ){        
        app.candidate = candidate;
        $modal.open({
            templateUrl: 'templates/candidates/recommend-candidate-modal.html',            
            controller: ['$scope', 'appConfigFactory', function( $scope, appConfigFactory ){
                $scope.candidate = app.candidate;
                $scope.PROFILE_THUMB = appConfigFactory.PROFILE_THUMB;
                
                $scope.ok = function(){
                    alert('OK');
                }
            }]
        });
    };
}]);