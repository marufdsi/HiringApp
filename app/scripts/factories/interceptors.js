/*
 *  Global request error handler
 */
app.factory('globalRequestInterceptor', [function() {
    return {    	
        responseError: function(){  
            console.error( 'Oops' );              
            return false;
        }
    };
}]);