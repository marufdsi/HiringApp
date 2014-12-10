app.controller('jobCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    
    console.log( $stateParams );
    
}]);

app.controller('questionnairesCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    
    console.log( $stateParams );
    $scope.rate=0;
    $scope.max = 10;
}]);