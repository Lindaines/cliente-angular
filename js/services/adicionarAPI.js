(function(){
	'use strict';
	
	angular
	.module('myapp')
	.factory('adicionarAPI',adicionarAPI);
	
	adicionarAPI.$inject = ['$http'];
	
	function adicionarAPI($http){
		var _adicionar  = function(filme){
			console.log(filme);
			return $http.post('http://localhost:3000/filmes/cadastrar', filme);
		};
		
		return{
			adicionar:_adicionar
		}
	}
	
})()
