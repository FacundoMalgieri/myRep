app.controller('postCtrl', function($scope, postService) {
	$scope.addPost = function(content) {
		var content = {text: $scope.postSmth, title: $scope.title};
		console.log(content);
		postService.addPost(content);
	};
});

/*
app.controller('MainCtrl', function($scope, $filter) {
  $scope.ModifiedDate = $filter("date")(Date.now(), 'MM-dd-yyyy');
});*/
app.controller('allPosts', function($scope, postService) {
   postService.all().then(function(data) {
		$scope.posts = data;
	});
	$scope.delete = function(post) {
   		if(confirm('U sure?')) {
   			var index = posts.indexOf(post);
	   		postService.delete(post);
	   		$scope.posts.splice(index,1);
   		}
    }
});

