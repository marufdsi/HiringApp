app.directive('customToggleButton', function() {
  return {
    restrict: 'E',
    scope: {
        "toggleButton": '=toggleButtonInfo'
    },
    templateUrl: 'templates/directives/toggeleButton.html'
  };
});