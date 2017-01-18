var app = angular.module('myApp',['ngRoute']);
app.config(['$httpProvider', function($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

app.constant('URL_BASE', 'http://localhost/AngularAppTest/');
//app.constant('URL_BASE', 'http://rk000697.ferozo.com/facundo/AngularAppTest/');
app.constant('USER', 'api/user/');
app.constant('POST', 'api/post/');

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
    templateUrl: "views/home.html",
      controller: "myCtrl"
    })
    .when('/homeInclude', {
    templateUrl: "views/homeInclude.html",
      controller: "myCtrl"
    })
    .when('/addUser', {
      templateUrl: "views/addUser.html",
      controller: "userCtrl"
    })
    .when('/login', {
      templateUrl: "views/login.html",
      controller: "loginCtrl"
    })
    .when('/posts', {
      templateUrl: "views/posts.html",
      controller: "myCtrl"
    })
    .when('/allPosts', {
	    templateUrl: "views/allPosts.html",
      controller: "myCtrl"
    })
    .when('/examples', {
      templateUrl: "views/examples.html",
      controller: "myCtrl"
    })  
    .when('/directives', {
	    templateUrl: "views/directives.html",
      controller: "myCtrl"
    })
    .when('/userList', {
      templateUrl: "views/userList.html",
      controller: "userList"
    })
    .otherwise({
        redirectTo: "/"
    })
    $locationProvider.html5Mode(true);
});  

app.run(function($rootScope, $location, userService) {
    var routesPermission = ['/','/posts','/allPosts','/homeInclude','/userList','/directives','/examples']; 
    $rootScope.$on('$routeChangeStart', function() {
        if(routesPermission.indexOf($location.path()) != -1 ) {            
            userService.islogged().then(function(response) {
              if(!response.data) {
                $location.path('/login');
              }      
            })
        }
    });
});       
/*
app.run(function($rootScope, $location, loginService) {
  var routespermission = ['/home']; 
  $rootScope.$on('$routeChangeStart', function() {
    if(routespermission.indexOf($location.path()) != -1) {
      var connected=loginService.islogged();
      connected.then(function(msg){
        if(!msg.data) $location.path('/login');
      });
    }
  });
});*/