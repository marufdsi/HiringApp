var app = angular.module('myApp', ['ui.bootstrap', 'ui.router']);

app.run(['$rootScope', function($rootScope){        
    $rootScope.$on("$stateChangeStart", function(event, toState) {                
        console.log( toState.authentication );                
    });
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('globalRequestInterceptor');

    //  UI-Route
    for( state in app.states ){
        $stateProvider.state( state, app.states[state] );
    }
    $urlRouterProvider.otherwise('/');

}]);


$(window).load(function(){
    //  Running the application
    angular.bootstrap(document, ['myApp']);            
});
