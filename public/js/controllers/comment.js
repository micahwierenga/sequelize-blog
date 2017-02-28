angular.module("sequelizeBlogApp")
	.controller("CommentIndexController", CommentIndexController)
	.controller("CommentShowController", CommentShowController)
	.controller("CommentNewController", CommentNewController)
	.controller("CommentEditController", CommentEditController);

CommentIndexController.$inject = ["$http"];
function CommentIndexController($http) {
	var vm = this;
	vm.deleteComment = deleteComment;

	function getAllComments() {
		$http.get('/api/comments')
			.then(function(response) {
				vm.allComments = response.data;
				console.log(response.data);
			});		
	}

	function deleteComment(comment) {
		$http.delete('/api/comments/' + comment.id)
			.then(function(response) {
				var commentIndex = vm.allComments.indexOf(comment);
				vm.allComments.splice(commentIndex, 1);
			});
	}

	getAllComments();
}

CommentShowController.$inject = ["$http", "$routeParams"];
function CommentShowController($http, $routeParams) {
	var vm = this;
	
	function getOneComment() {
		$http.get('/api/comments/' + $routeParams.id)
			.then(function(response) {
				vm.oneComment = response.data;
			});			
	}

	getOneComment();
}

CommentNewController.$inject = ["$http", "$location"];
function CommentNewController($http, $location) {
	var vm = this;
	vm.saveComment = saveComment;

	function saveComment() {
		$http.post('/api/comments/', vm.newComment)
			.then(function(response) {
				var comment = response.data;
				$location.path("/comments/" + comment.id);
			});		
	}

}

CommentEditController.$inject = ["$http", "$routeParams", "$location"];
function CommentEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateComment = updateComment;

	function getComment() {
		$http.get('/api/comments/' + $routeParams.id)
			.then(function(response) {
				vm.updatedComment = response.data;
			});			
	}

	function updateComment() {
		$http.put('/api/comments/'+$routeParams.id, vm.updatedComment)
			.then(function(response) {
				var comment = response.data;
				$location.path("/comments/" + comment.id);
			});			
	}

	getComment();
}