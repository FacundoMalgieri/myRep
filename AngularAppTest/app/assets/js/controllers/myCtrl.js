app.controller('myCtrl', function($scope, sessionService, userService, IMGS) {
	$scope.firstName = "Facu";
	$scope.lastName  = "Doe";
	
	userService.username().then(function(data) {	
		$scope.username = data;
	});  	

	$scope.firstname = "Facu";
    $scope.changeName  = function() {
    	$scope.firstname = "Nelly";
    }
    $scope.logout = function() {
		userService.logout();
	}
	$scope.apps = [ 
	  { 
	    icon: IMGS + 'background5.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: IMGS + 'background1.png', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: IMGS + 'background2.png', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: IMGS + 'background3.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: IMGS + 'background4.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  { 
	   	icon: IMGS + 'background7.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  { 
	   	icon: IMGS + 'background9.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  { 
	   	icon: IMGS + 'background11.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  
  ];
});
