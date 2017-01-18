'use strict';

app.factory('sessionService', function($http){
	return{
		set:function(key,value) {
			return sessionStorage.setItem(key,value);
		},
		get:function(key) {
			return sessionStorage.getItem('id');
		},
		destroy:function(key) {
			return sessionStorage.removeItem(key);
		}
	}	
})