var app = angular.module('myApp', ['ui.bootstrap', 'ui.router']);

app.run(['$rootScope', '$state', 'appConfigFactory', 'eventsFactory', 'authService', function($rootScope, $state, appConfigFactory, eventsFactory, authService){        

    //  Application configuration
    $rootScope.appConfig = appConfigFactory;
    $rootScope.events = eventsFactory;

    //  Fetches user Data
    authService.fetchUserInfo();    

    //  Triggers upon route change
    $rootScope.$on("$stateChangeStart", function(event, toState) {                
        
        //  If reoute requires authentication & user is not logged in redirect to login page
        if( toState.authRequired && !authService.isLoggedIn() )  {
            event.preventDefault();
            $state.go('index');
        }


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
