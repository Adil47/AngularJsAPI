

var app = angular.module('StudentModule', []);

app.controller('StudentController', function($scope,$http) {
  $scope.Students=[];
	fetchStudents();
  	function fetchStudents()
  	{
  		$http.get("http://localhost:55429/Students/json/getStudents")
	  	.then(function(response){
	  		$scope.Students=response.data;
	  		// var data =JSON.stringify(response.data);
	  		// alert(data);
	  	});
  	}

  	$scope.insertStudent=function(Name,Phone,Email)
  	{
  		$http.get("http://localhost:55429/Students/insert?Name="+Name+"&Phone="+Phone+"&Email="+Email)
  		.then(function(res){

  			//alert(JSON.stringify(res.data.Response));
  			fetchStudents();
  		});

  	}

  	$scope.deleteStudent=function(id)
  	{
  		
			var url = 'http://localhost:55429/Students/delete';
			var data = {StudentId:id};

			$http.post(url, data)
			.then(function (response) 
			{
			//alert(response.data.Response);
			fetchStudents();

			});

			
	}

});