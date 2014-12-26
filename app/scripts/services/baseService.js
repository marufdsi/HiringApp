app.service('baseService', ['$http', function($http) {

        'use strict';

        // Initialize variables
        this.host = "api";

        this.service = "";
        
        this.version = "/v1";

        this.method = "GET";        

        this.params = {};
        
        $http.defaults.headers.common['Auth-token'] = "Some Token";


        //  Internal Methods
        this._getService = function() {
            return this.host + this.version + '/' + this.service + '.json';            
        };

        //  Default methods
        this.load = function() {
            return $http({
                url: this._getService(),
                params: this.params,
                method: this.method                
            });
        };

        this.save = function() {
            //  Need to be implemented
            return $http({
                url: this._getService(),
                params: this.params,
                method: this.method
            });
        };

        this.remove = function() {
            //	Need to be implemented
            return $http({
                url: this._getService(),
                params: this.params,
                method: this.method
            });
        };


    }]);