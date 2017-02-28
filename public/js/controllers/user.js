angular.module("sequelizeBlogApp")
	.controller("UserIndexController", UserIndexController)
	.controller("UserShowController", UserShowController)
	.controller("UserNewController", UserNewController)
	.controller("UserEditController", UserEditController);

UserIndexController.$inject = ["$http"];
function UserIndexController($http) {
	var vm = this;
	vm.deleteUser = deleteUser;

	function getAllUsers() {
		$http.get('/api/users')
			.then(function(response) {
				vm.allUsers = response.data;
				console.log(response.data);
			});		
	}

	function deleteUser(user) {
		console.log(user.user_id);
		$http.delete('/api/users/' + user.user_id)
			.then(function(response) {
				var userIndex = vm.allUsers.indexOf(user);
				vm.allUsers.splice(userIndex, 1);
			});
	}

	getAllUsers();
}

UserShowController.$inject = ["$http", "$routeParams"];
function UserShowController($http, $routeParams) {
	var vm = this;
	
	function getOneUser() {
		console.log($routeParams.id);
		$http.get('/api/users/' + $routeParams.id)
			.then(function(response) {
				vm.oneUser = response.data;
				console.log(response.data);
			});			
	}

	getOneUser();
}

UserNewController.$inject = ["$http", "$location"];
function UserNewController($http, $location) {
	var vm = this;
	vm.saveUser = saveUser;

	function saveUser() {
		console.log(vm.newUser);
		$http.post('/api/users/', vm.newUser)
			.then(function(response) {
				var user = response.data;
				$location.path("/users/" + user.id);
			});		
	}

}

UserEditController.$inject = ["$http", "$routeParams", "$location"];
function UserEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateUser = updateUser;

	function getUser() {
		console.log($routeParams.id);
		$http.get('/api/users/' + $routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedUser = response.data;
			});			
	}

	function updateUser() {
		$http.put('/api/users/' + $routeParams.id, vm.updatedUser)
			.then(function(response) {
				var user = response.data;
				$location.path("/users/" + user.id);
			});			
	}

	getUser();
}