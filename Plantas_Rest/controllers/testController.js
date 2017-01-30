angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);
function testController($scope, testRequest) {
	$scope.posts={};
	$scope.mensaje="";
	// Obtener todos los valores segun la busqueda
	$scope.getAllPlantas = function(){
		plantas="Plantas/"
		testRequest.posts(plantas).then(function (data){
	    console.log("...");
	    console.log(data.data);
			$scope.posts=data.data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	$scope.getAllElevacion = function(){
		elevacion="Elevacion/"
		testRequest.posts(elevacion).then(function (data){
	    console.log("...");
	    console.log(data.data);
			$scope.posts=data.data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	$scope.getAllParteUSada = function(){
		parteusada = "ParteUsada/"
		testRequest.posts(parteusada).then(function (data){
	    console.log("...");
	    console.log(data.data);
			$scope.posts=data.data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	$scope.getAllProductos = function(){
		productos = "Productos/"
		testRequest.posts(productos).then(function (data){
	    console.log("...");
	    console.log(data.data);
			$scope.posts=data.data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	
  	// CRUDs

  	// Plantas
  	$scope.createPlantas= function(){
    datos = {'idplantas': $scope.a.idplantas,'idparte_usada': $scope.a.idparte_usada,'idproductos': $scope.a.idproductos,'nombre_cientifico': $scope.a.nombre_cientifico,'nombre_vernaculo': $scope.a.nombre_vernaculo,'descripcion': $scope.a.descripcion, 'origen': $scope.a.origen}
		plantas="Plantas/"
		testRequest.add_post(plantas,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}

	$scope.updatePlantas = function(){
    datos = {'idplantas': $scope.b.idplantas,'idparte_usada': $scope.b.idparte_usada,'idproductos': $scope.b.idproductos,'nombre_cientifico': $scope.b.nombre_cientifico,'nombre_vernaculo': $scope.b.nombre_vernaculo,'descripcion': $scope.b.descripcion, 'origen': $scope.b.origen}
		plantas="Plantas/"
		testRequest.upda_post(plantas,$scope.b.idplantas,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}
	$scope.deletePlantas = function(){
		$scope.unPost={};
		plantas="Plantas/"
		testRequest.delete_post($scope.id_post,plantas).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
	$scope.selectPlantas = function(){
		$scope.unPost={};
		plantas="Plantas/"
		testRequest.post(plantas,$scope.post_idplantas).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}

	// Productos
	$scope.createProductos = function(){
    datos = {'idproductos': $scope.a.idproductos,'nombre_productos': $scope.a.nombre_productos}
		productos="Productos/"
		testRequest.add_post(productos,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}

	$scope.updateProductos = function(){
    
		datos = {'idproductos': $scope.b.idproductos,'nombre_productos': $scope.b.nombre_productos}
		productos="Productos/"
		testRequest.upda_post(productos,$scope.b.idproductos,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}
	
	$scope.deleteProductos = function(){
		$scope.unPost={};
		productos="Productos/"
		testRequest.delete_post($scope.id_post,productos).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
	$scope.selectProductos = function(){
		$scope.unPost={};
		productos="Productos/"
		testRequest.post(productos,$scope.post_idproductos).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
	

	// Parte Usada

	$scope.createParte = function(){
    datos = {'idparte_usada': $scope.a.idparte_usada, 'nombre_parte_usada': $scope.a.nombre_parte_usada}
		parte="ParteUsada/"
		testRequest.add_post(parte,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}

	$scope.updateParte = function(){
    
		datos = {'idparte_usada': $scope.b.idparte_usada, 'nombre_parte_usada': $scope.b.nombre_parte_usada}
		parte="ParteUsada/"
		testRequest.upda_post(parte,$scope.b.idparte_usada,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}
	
	$scope.deleteParte = function(){
		$scope.unPost={};
		parte="ParteUsada/"
		testRequest.delete_post($scope.id_post,parte).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
	$scope.selectParte = function(){
		$scope.unPost={};
		parte="ParteUsada/"
		testRequest.post(parte,$scope.post_idparte_usada).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}

	// Elevaciones

	$scope.createElevacion= function(){
    datos = {'idelevacion': $scope.a.idelevacion, 'desde': $scope.a.desde, 'hasta': $scope.a.hasta}
		elevacion="Elevacion/"
		testRequest.add_post(elevacion,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}

	$scope.updateElevacion = function(){
    datos = {'idelevacion': $scope.b.idelevacion, 'desde': $scope.b.desde, 'hasta': $scope.b.hasta}
		elevacion="Elevacion/"
		testRequest.upda_post(elevacion,$scope.b.idelevacion,datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}
	$scope.deleteElevacion = function(){
		$scope.unPost={};
		elevacion="Elevacion/"
		testRequest.delete_post($scope.id_post,elevacion).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
	$scope.selectElevacion = function(){
		$scope.unPost={};
		elevacion="Elevacion/"
		testRequest.post(elevacion,$scope.post_idelevacion).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}	


}
