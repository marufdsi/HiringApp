app.service('authService', ['$http', function( $http ){
    
    
    //  Logs in a user
    this.logIn = function( model ){
        var data = {
            email: model.email
        };
        localStorage.setItem("hiring_session", JSON.stringify( data ) );
    };
    
    //  Logs out a user
    this.logOut = function(){
        localStorage.removeItem('hiring_session');
    };
    
    //  Fetches user info
    this.userInfo = function(){
        
    };
    
    //  returns boolean true if user is logged in
    this.isLoggedIn = function(){
        return localStorage.getItem('hiring_session') == null ? false : true;
    };
    
    return this;
    
    
}]);