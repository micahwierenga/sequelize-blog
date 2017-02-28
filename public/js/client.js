angular.module("sequelizeBlogApp", ['ngRoute'])
	.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    	//Main Routes
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: "PostIndexController as postsController"
      })
      .when('/about', {
      	templateUrl: '/templates/about.html'
      })

			//User Routes
			  
			// index
			.when('/users', {
				templateUrl: '/templates/users/index.html',
				controller: "UserIndexController as usersController"
			})

			// new
			.when('/users/new', {
				templateUrl: '/templates/users/new.html',
				controller: "UserNewController as userNewController"
			})

			// show
			.when('/users/:id', {
				templateUrl: '/templates/users/show.html',
				controller: "UserShowController as userController"
			})

			// edit
			.when('/users/:id/edit', {
				templateUrl: '/templates/users/edit.html',
				controller: "UserEditController as userEditController"
			})

			//Post Routes
			  
			// index
			.when('/posts', {
				templateUrl: '/templates/posts/index.html',
				controller: "PostIndexController as postsController"
			})

			// new
			.when('/posts/new', {
				templateUrl: '/templates/posts/new.html',
				controller: "PostNewController as postNewController"
			})

			// show
			.when('/posts/:id', {
				templateUrl: '/templates/posts/show.html',
				controller: "PostShowController as postController"
			})

			// edit
			.when('/posts/:id/edit', {
				templateUrl: '/templates/posts/edit.html',
				controller: "PostEditController as postEditController"
			})	

			//Comment Routes
			  
			// index
			.when('/comments', {
				templateUrl: '/templates/comments/index.html',
				controller: "CommentIndexController as commentsController"
			})

			// new
			.when('/comments/new', {
				templateUrl: '/templates/comments/new.html',
				controller: "CommentNewController as commentNewController"
			})

			// show
			.when('/comments/:id', {
				templateUrl: '/templates/comments/show.html',
				controller: "CommentShowController as commentController"
			})

			// edit
			.when('/comments/:id/edit', {
				templateUrl: '/templates/comments/edit.html',
				controller: "CommentEditController as commentEditController"
			});					
  });
