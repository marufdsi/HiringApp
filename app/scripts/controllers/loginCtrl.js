app.controller('loginCtrl', ['$scope', 'authService', function( $scope, authService ){
    
    $scope.signin = function( form ){       
        
        form.submitted = true;
        if( form.$valid ){
            console.log( $scope.login );
            authService.logIn( $scope.login );
        }                   
    }
    
}]);