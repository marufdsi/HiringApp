app.controller('candidatesCtrl', ['$scope', '$rootScope', 'candidatesResolve', 'appConfigFactory', '$modal', '$state', '$stateParams',
    function( $scope, $rootScope, candidatesResolve, appConfigFactory, $modal, $state, $stateParams ){    
    'use strict';    
    
    $scope.candidates = candidatesResolve.data.data;
    $scope.max = 10;
    $scope.candidate_image_dir = appConfigFactory.CANDIDATE_IMG;
    $scope.candidate_resume_dir = appConfigFactory.CANDIDATE_RESUME;
    $scope.profile_thumb = appConfigFactory.PROFILE_THUMB;
    $scope.profile_icon = appConfigFactory.PROFILE_ICON;    
    
    
    /**
     *      
     *  Actions
     */    
    $scope.backToPosition = function(){
        var jobID = $stateParams.id;
        $state.go('job', {jobID: jobID});
    };
    
    $scope.backToPositionList = function(){
        $state.go('jobs');
    };

    /*
    *   Events
    */
    $rootScope.$on( $rootScope.events.LOG_OUT, function(){            
        console.log('Logget Out from candidates controller');
    });

}]);