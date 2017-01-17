app.directive('directive1', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'assets/js/directives/directive1.html'
  };
});