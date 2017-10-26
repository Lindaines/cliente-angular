(function(){
	'use strict';
	
	angular
	.module('myapp')
	.factory('excluirAPI',excluirAPI);
	
	excluirAPI.$inject = ['$http'];
	
	function excluirAPI($http){
		var _excluir  = function(id){
			return $http.delete('http://localhost:3000/filmes/deletar/'+ id);
		}


		
		return{
			excluir:_excluir,
		}
	}
	
})()



