angular.module("sequelizeBlogApp")
	.controller("PostIndexController", PostIndexController)
	.controller("PostShowController", PostShowController)
	.controller("PostNewController", PostNewController)
	.controller("PostEditController", PostEditController);

PostIndexController.$inject = ["$http"];
function PostIndexController($http) {
	var vm = this;
	vm.deletePost = deletePost;

	function getAllPosts() {
		$http.get('/api/posts')
			.then(function(response) {
				vm.allPosts = response.data;
				// console.log(response.data);
			});		
	}

	function deletePost(post) {
		console.log('delete');
		$http.delete('/api/posts/' + post.id)
			.then(function(response) {
				var postIndex = vm.allPosts.indexOf(post);
				vm.allPosts.splice(postIndex, 1);
			});
	}

	getAllPosts();
}

PostShowController.$inject = ["$http", "$routeParams"];
function PostShowController($http, $routeParams) {
	var vm = this;
	
	function getOnePost() {
		$http.get('/api/posts/' + $routeParams.id)
			.then(function(response) {
				vm.onePost = response.data;
				console.log(response.data);
			});			
	}

	getOnePost();
}

PostNewController.$inject = ["$http", "$location"];
function PostNewController($http, $location) {
	var vm = this;
	vm.savePost = savePost;

	function getAllUsers() {
		$http.get('/api/users')
			.then(function(response) {
				vm.allUsers = response.data;
				console.log(response.data);
			});		
	}

	getAllUsers();

	function savePost() {
		$http.post('/api/posts/', vm.newPost)
			.then(function(response) {
				var post = response.data;
				$location.path("/posts/" + post.id);
			});		
	}

}

PostEditController.$inject = ["$http", "$routeParams", "$location"];
function PostEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updatePost = updatePost;

	function getPost() {
		$http.get('/api/posts/' + $routeParams.id)
			.then(function(response) {
				vm.updatedPost = response.data;
			});			
	}

	function updatePost() {
		$http.put('/api/posts/'+$routeParams.id, vm.updatedPost)
			.then(function(response) {
				var post = response.data;
				$location.path("/posts/" + post.id);
			});			
	}

	getPost();
}