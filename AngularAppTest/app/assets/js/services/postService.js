app.factory('postService', function($http, $location, URL_BASE, $q) { 
	return {
		addPost:function(content) {
			$http.post(URL_BASE + 'api/post/addPost', content)
			.success(function() {
	    		alert('Post added');
	    		$location.path('/allPosts');
	 		})
		},
	 	all:function() {
 		    var deferred = $q.defer();			
	 		$http.get(URL_BASE + 'api/post/allPosts')
	 		.then(function(response) {
	 			console.log('Fetching data...');
        		posts = response.data;
        		deferred.resolve(posts);
    		});
    		posts = deferred.promise; 
    		return $q.when(posts);
 		},
 		delete:function(post) {
 			$http.post(URL_BASE + 'api/post/delete', post)
			.success(function() {
	    		alert('Post deleted');
	 		})
 		}
	}	
});