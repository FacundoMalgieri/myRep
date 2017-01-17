app.directive('directive2', function() {
  return {	
    restrict: 'E',
    scope: {},
    templateUrl: 'assets/js/directives/directive2.html',
    	
    link: function(scope,element,atrr) {
  		scope.buttonText = "Push Me",
  		scope.status 	 = true,
  		
      scope.changeText = function () {        
        element.toggleClass('btn-active');
        if(scope.status) {
  				scope.buttonText = "And Then Just Touch Me";
  				scope.status 	   = false;
  			}
  			else {
  				scope.buttonText = "Till I Can Get My - Satisfaction";
  				scope.status 	 = true;
  			}
  		}
  	}
  }
});