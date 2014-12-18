app.controller('headerNavCtrl', ['$scope', '$rootScope', 'authService',function( $scope, $rootScope, authService ){

	$scope.appConfig = $rootScope.appConfig;
	$scope.isLoggedIn = authService.isLoggedIn();	
	$scope.userInfo = authService.userInfo();	

	
	/*
	*	Actions (click events)
	*/
	$scope.logout = function(){
		authService.logOut();
	};

	/*
	*	Events
	*/
	$rootScope.$on( $rootScope.events.LOG_OUT, function(){
		console.log('Logget Out');
	});

}]);