var app = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'angular-loading-bar']);

app.run(['$rootScope', '$state', 'appConfigFactory', 'eventsFactory', 'authService', function($rootScope, $state, appConfigFactory, eventsFactory, authService){        

    //  Application configuration
    $rootScope.appConfig = appConfigFactory;
    $rootScope.events = eventsFactory;
    $rootScope.pageTitle = appConfigFactory.DEFAULT_TITLE;

    //  Fetches user Data
    authService.fetchUserInfo();    

    //  Triggers upon route change
    $rootScope.$on("$stateChangeStart", function(event, toState) {
        
        //  If route requires authentication & user is not logged in redirect to login page
        if( toState.authRequired && !authService.isLoggedIn() )  {
            event.preventDefault();
            $state.go('index');
        }
        
        //  If route cannot be viewed by authenticated user
        else if( toState.redirectAuthenticated && authService.isLoggedIn() ){
            event.preventDefault();
            $state.go('jobs');
        }

        //  Changing page title, if there is any
        if( toState.title )
            $rootScope.pageTitle = toState.title;
        else
            $rootScope.pageTitle = appConfigFactory.DEFAULT_TITLE;

    });

    //  Event wise application behaviour
    $rootScope.$on( $rootScope.events.LOG_OUT, function(){            
        if( $state.current.authRequired )
            $state.go('index');
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
