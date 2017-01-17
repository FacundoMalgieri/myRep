app.factory('userService', function($http, $location, URL_BASE, $q, sessionService) { 
	return {
		add:function(user) {
			$http.post(URL_BASE + 'api/user/addUser', user)
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
	 		$http.get(URL_BASE + 'api/user/allUsers')
	 		.then(function(response) {
        		users = response.data;
        		deferred.resolve(users);
    		});
    		users = deferred.promise; 
    		return $q.when(users);
 		},
 		login:function(user){
			var $promise = $http.post(URL_BASE + 'api/user/validate', user); 
			$promise.then(function(response){
				var id = response.data.id_user;
				if(id) {
					sessionService.set('id',id);
					$location.path('/home');
				}	       
				else {
					$location.path('/login');
				}				   
			});
		},
		logout:function(id) {
			sessionService.destroy('id');
			$location.path('/login');
		},
		islogged:function() {
			/*var $checkSessionServer=$http.post(URL_BASE + 'api/user/check', id);
			return $checkSessionServer;
			*/
			if(sessionService.get('id')) return true;
			else return false;
			
		},
		delete:function(user) {
 			$http.post(URL_BASE + 'api/user/delete', user)
			.success(function() {
	    		alert('User deleted');
	 		})
 		}
	}

});
	
