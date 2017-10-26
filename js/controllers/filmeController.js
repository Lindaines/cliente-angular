(function(){
	'use strict';
	
	angular
	.module('myapp')
	.controller('filmeController', filmeController);
	
	filmeController.$inject=['listarAPI', 'excluirAPI', 'adicionarAPI', '$scope'];
	
	function filmeController(listarAPI, excluirAPI, adicionarAPI, $scope){
		$scope.filmes = [];
		$scope.resposta= ""
		
		$scope.listar = function(){
			listarAPI.listar().success(function(data){
				$scope.filmes = data;
			});
		}

		$scope.excluir = function(id){
			
			excluirAPI.excluir(id).success(function(data){
				$scope.resposta = data;
			}).then(function(){
				$scope.listar();
			});
		}


		$scope.adicionar = function(filme){
			adicionarAPI.adicionar(filme).success(function(data){
				$scope.resposta = data;
			}).then(function(){
				$scope.listar();
			});
		}

	}

})();
