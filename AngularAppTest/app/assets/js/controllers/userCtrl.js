app.controller('userList', function($scope, userService) {
	userService.all().then(function(data) {
		$scope.users = data;
	});
	$scope.delete = function(user) {
   		if(confirm('U sure?')) {
   			var index = $scope.users.indexOf(user);
	   		console.log(user.id_user + ' ' + index);
	   		userService.delete(user);
	   		$scope.users.splice(index,1);
   		}
    }
});

app.controller('userCtrl', function($scope, userService) {
	$scope.add = function(user) {
		userService.add(user);
	}
});

app.controller('loginCtrl', function ($scope, $location, userService) {
	$scope.login = function(user) {
		userService.login(user);
	};
});

/*app.controller('addUser', ['$scope' , '$location', '$http', 'URL_BASE', function($scope, $location, $http, URL_BASE) {
	$scope.add = function() {
		var model = {
			username: $scope.username,
			password: $scope.password
		}
		$http.post(URL_BASE + 'api/user/addUser', model).success(function() {
	        $scope.username = null;
	        $scope.password = null;
	    	alert('User added');
	    	$location.path('/userList');
    	});
	}
}]);*/