app.factory('userService', function($http, $location, $window, URL_BASE, USER, $q, sessionService) { 
	return {
		add:function(user) {
			$http.post(URL_BASE + USER + 'addUser', user)
			.then(function(response) {
	    		if(response.data == "true") {
	    			alert('User added');
	    			$location.path('/login');	
	    		}
	    		else {
	    			alert('User already exists');
	    			$location.path('/addUser');
	    		}
	 		})
	 	},
	 	all:function() {
 		    var deferred = $q.defer();			
	 		$http.get(URL_BASE + USER + 'allUsers')
	 		.then(function(response) {
        		users = response.data;
        		deferred.resolve(users);
    		});
    		users = deferred.promise; 
    		return $q.when(users);
 		},
 		login:function(user) {
			var $promise = $http.post(URL_BASE + USER + 'validate', user); 
			$promise.then(function(response) {
				var id = response.data;
				if(id) {
					sessionService.set('id',id);
					$window.location.href = 'URL_BASE';				   	
				}	       
				else {
					$location.path('/login');
				}
			});
		},
		logout:function() {
			var $promise = $http.post(URL_BASE + USER + 'logout'); 
			$promise.then(function() {
				sessionService.destroy('id');
				$window.location.reload();	 
			})				   
		},
		islogged:function() {
			var $checkSessionServer = $http.post(URL_BASE + USER + 'data');
			return $checkSessionServer;			
		},
		delete:function(user) {
 			$http.post(URL_BASE + 'api/user/delete', user)
			.success(function() {
	    		alert('User deleted');
	 		})
 		},
 		username:function() {
 		    var deferred = $q.defer();			
	 		$http.get(URL_BASE + USER + 'data')
	 		.then(function(response) {
        		username = response.data;
        		deferred.resolve(username);
    		});
    		username = deferred.promise;
    		return $q.when(username);
 		}
	}

});
	
