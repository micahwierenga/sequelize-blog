var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.js');
var postsController = require('../controllers/posts.js');
var commentsController = require('../controllers/comments.js');
var ordersController = require('../controllers/orders.js');
var itemsController = require('../controllers/items.js');

//User Routes
  
// index
router.get('/api/users', usersController.index);

// create
router.post('/api/users', usersController.create);

// show
router.get('/api/users/:id', usersController.show);

// update
router.put('/api/users/:id', usersController.update);

// destroy
router.delete('/api/users/:id', usersController.destroy);

//Post Routes

// index
router.get('/api/posts', postsController.index);

// create
router.post('/api/posts', postsController.create);

// show
router.get('/api/posts/:id', postsController.show);

// update
router.put('/api/posts/:id', postsController.update);

// destroy
router.delete('/api/posts/:id', postsController.destroy);

//Comment Routes

// index
router.get('/api/comments', commentsController.index);

// create
router.post('/api/comments', commentsController.create);

// show
router.get('/api/comments/:id', commentsController.show);

// update
router.put('/api/comments/:id', commentsController.update);

// destroy
router.delete('/api/comments/:id', commentsController.destroy);

//Order Routes

// index
router.get('/api/orders', ordersController.index);

// create
router.post('/api/orders', ordersController.create);

// show
router.get('/api/orders/:id', ordersController.show);

// update
router.put('/api/orders/:id', ordersController.update);

// destroy
router.delete('/api/orders/:id', ordersController.destroy);

//Item Routes

// index
router.get('/api/items', itemsController.index);

// create
router.post('/api/items', itemsController.create);

// show
router.get('/api/items/:id', itemsController.show);

// update
router.put('/api/items/:id', itemsController.update);

// destroy
router.delete('/api/items/:id', itemsController.destroy);

module.exports = router;