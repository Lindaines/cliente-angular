(function(){
	'use strict';
	
	angular
	.module('myapp')
	.factory('listarAPI',listarAPI);
	
	listarAPI.$inject = ['$http'];
	
	function listarAPI($http){
		var _listar  = function(){
			return $http.get('http://localhost:3000/filmes/');
		};
		
		return{
			listar:_listar
		}
	}
	
})()


