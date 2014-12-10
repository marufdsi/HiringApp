app.directive('callenderSchedule', function(){
    
    return {
        'restrict': 'EA',
        templateUrl: 'templates/directives/callender.html',
        controller: ['$scope', function( $scope ){
            
            $("#eventCalendarHumanDate").eventCalendar({
                eventsjson: 'api/events.json',                    
            });                            
            
        }]
    }
    
});