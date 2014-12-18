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