app.controller('candidatesCtrl', ['$scope', 'candidatesResolve', 'appConfigFactory', function( $scope, candidatesResolve, appConfigFactory ){    
    
    $scope.candidates = candidatesResolve.data.data;
    $scope.max = 10;
    $scope.candidate_image_dir = appConfigFactory.CANDIDATE_IMG;
    $scope.candidate_resume_dir = appConfigFactory.CANDIDATE_RESUME;
    $scope.profile_thumb = appConfigFactory.PROFILE_THUMB;
    $scope.profile_icon = appConfigFactory.PROFILE_ICON;
    
    
    $scope.recommendModal = function( candidate ){
        console.log( candidate );
    }
}]);