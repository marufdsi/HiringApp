//var app = angular.module('myApp', ['ui.bootstrap', 'ui.router']);
var app = angular.module('myApp', ['ui.bootstrap', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('globalRequestInterceptor');

    //  UI-Route
    for( state in app.states ){
        $stateProvider.state( state, app.states[state] );
    }
    $urlRouterProvider.otherwise('/');

}]);