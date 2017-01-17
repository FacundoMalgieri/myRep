app.controller('myCtrl', ['$scope', function($scope) {
	$scope.firstName = "John";
	$scope.lastName  = "Doe";
	$scope.firstname = "John";
  
    $scope.changeName  = function() {
    	$scope.firstname = "Nelly";
    };

	$scope.apps = [ 
	  { 
	    icon: 'assets/imgs/background5.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: 'assets/imgs/background1.png', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: 'assets/imgs/background2.png', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: 'assets/imgs/background3.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  }, 
	  { 
	   	icon: 'assets/imgs/background4.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  { 
	   	icon: 'assets/imgs/background7.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  { 
	   	icon: 'assets/imgs/background9.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  { 
	   	icon: 'assets/imgs/background11.jpg', 
	    title: 'background', 
	    developer: 'background', 
	  },
	  
  ];
}]);
