app.service('baseService', ['$http', function($http) {

        'use strict';

        // Initialize variables
        this.service = "";

        this.version = "v1";

        this.params = {};

        this.method = "GET";


        //  Internal Methods
        this._getService = function() {
            return 'api/' + this.version + '/' + this.service + '.json';
        };

        //  Default methods
        this.load = function() {
            return $http({
                url: this._getService(),
                method: this.method
            });
        };

        this.save = function() {
            //  Need to be implemented
            alert('Not implemented yet');
        };

        this.remove = function() {
            //	Need to be implemented
            alert('Not implemented yet');
        };


    }]);