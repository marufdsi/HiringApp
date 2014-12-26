app.service('authService', ['$http', '$rootScope', 'userInfoService', function( $http, $rootScope, userInfoService ){
    
    
    //  Logs in a user
    this.logIn = function( model ){
        
        return $http({
            url: 'api/v1/userInfo.json'
        }).success(function(data){            
            localStorage.setItem("hiring_session", JSON.stringify( data ) );
        });
        
    };
    
    //  Logs out a user
    this.logOut = function(){
        localStorage.removeItem('hiring_session');
        $rootScope.$emit( $rootScope.events.LOG_OUT );
    };
    
    //  returns userinfo from localstorage
    this.userInfo = function(){
        return localStorage.getItem('hiring_session') == null ? {} : $.parseJSON( localStorage.getItem('hiring_session') );
    };

    //  Fetches user Info from server
    this.fetchUserInfo = function(){

        userInfoService.syncLoad().done(function(data){
            console.log( data );
            localStorage.removeItem('hiring_session');
            if( Object.getOwnPropertyNames(data).length )
                localStorage.setItem("hiring_session", JSON.stringify( data ) );
        });

    };
    
    //  returns boolean true if user is logged in
    this.isLoggedIn = function(){        
        return localStorage.getItem('hiring_session') == null ? false : true;
    };
    
    return this;
    
    
}]);