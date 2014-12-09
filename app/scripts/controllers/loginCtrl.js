app.controller('loginCtrl', ['$scope', function( $scope ){
    
    $scope.signin = function( form ){       
        
        if( form.$valid ){
            alert('Valid');
        }        
    }
    
}]);