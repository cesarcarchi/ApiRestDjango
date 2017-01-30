angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory
		// var path = "http://jsonplaceholder.typicode.com/";//API path
		var path = "http://localhost:8000/";//API path
		return {
			//Login
			posts : function(nom){ //Retornara la lista de posts
				global = $http.get(path+nom);
				return global;
			},
			post : function(nom,id){ //retornara el post por el id
				global = $http.get(path+nom+id);
				return global;	
			},
      		add_post : function(nom,informacion){ //retornara el post por el id
				global = $http.post(path+nom,informacion);
				return global;	
			},
			upda_post : function(nom,id,informacion){ //retornara el post por el id
				global = $http.put(path+nom+id+"/",informacion);
				return global;	
			},
			delete_post : function(id,nom){ //retornara el post por el id
				global = $http.delete(path+nom+id+"/");
				return global;	
			}

		}
	});
