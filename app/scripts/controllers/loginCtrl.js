app.controller('loginCtrl', ['$scope', '$state', 'authService', function( $scope, $state, authService ){
    
    $scope.signin = function( form ){       
        
        form.submitted = true;
        if( form.$valid ){            
            authService.logIn( $scope.login ).then(function(){
            	$state.go('jobs');
            });
        }                   
    }
    
}]);