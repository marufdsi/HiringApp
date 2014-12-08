/*  
 *  Application Constants
 */
app.factory('appFactory', function(){
    return {
        IS_LOGGED_IN: 'isLoggedIn',
        AFTER_LOGIN: '/products',        
    };
});

/*
 *  Global request error handler
 */
app.factory('globalRequestInterceptor', [function() {
    return {
        responseError: function(data){  
            alert('OOPS...');
            return false;
        }
    };
}]);