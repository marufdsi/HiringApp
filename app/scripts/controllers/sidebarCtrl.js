
app.controller('sidebarCtrl', ['$scope', '$http', function($scope, $http){
    $scope.job = {
        "recruitDate" : "May 15, 2015",
        "recruitDateChange": "true"
    };
    $scope.interviewers = [
        {
            "name"          : "John Doe",
            "image"         : "assets/images/profile1.jpeg"    
        },
        {
            "name"          : "John Doe",
            "image"         : "assets/images/profile2.jpeg"    
        },
        {
            "name"          : "John Doe",
            "image"         : "assets/images/profile3.jpeg"    
        }];
    $scope.question = {
        "totalQuestion"     : "15",
        "newQuestion"       : "2"
    };
    $scope.candidates = {
        "selectedCandidate"     : "5",
        "newCandidate"       : "4"
    };
    
}]);

