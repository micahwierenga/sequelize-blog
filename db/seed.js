var Model = require('../models').models;
var Order = Model.Order;


var createUsers = () => {
	return Model.User.bulkCreate([
	{
		id: 1,
		username: 'micah',
		role: 'admin'
	},
	{
		id: 2,
		username: 'little_bobby_tables',
		role: 'user'
	}
	])
	.then( (users) => {
		console.log(users.dataValues);
	})
}

var createPosts = () => {
	return Model.Post.bulkCreate([
	{
		id: 1,
		user_id: 1,
		title: 'My First Post',
		content: 'Here is the first post by micah. It is profound. Everybody thinks so.'
	},
	{
		id: 2,
		user_id: 1,
		title: 'Shallow Horizon',
		content: 'Here is the second post by micah. It is less profound, but in the deepest way possible.'
	},
	{
		id: 3,
		user_id: 2,
		title: 'The Internet Needs More Confusion',
		content: 'Here is the second post by little_bobby_tables. It is confusing, but I have to believe the internet has benefited from it.'
	},
	{
		id: 4,
		user_id: 2,
		title: 'Still Talking',
		content: 'Here is the second post by little_bobby_tables. Is this guy still talking about Sequelize?'
	}
	])
	.then( (posts) => {
		console.log(posts.dataValues);
	})
}

var createComments = () => {
	return Model.Comment.bulkCreate([
	{
		id: 1,
		post_id: 1,
		content: 'First!',
		commenter_username: 'empathetic_troll',
		status: 'approved',
	},
	{
		id: 2,
		post_id: 1,
		content: 'I disagree with everything you said, but in the kindest way possible.',
		commenter_username: 'empathetic_troll',
		status: 'approved',
	},
	{
		id: 3,
		post_id: 3,
		content: 'IF YOU DO NOT USE CAPS, NO ONE WILL TAKE YOU SERIOUSLY!!!',
		commenter_username: 'disembodied_screamer',
		status: 'approved',
	},
	])
	.then( (comments) => {
		console.log(comments.dataValues);
	})
}

// var createOrders = () => {
// 	// return Model.Order.bulkCreate([
// 	// {
// 	// 	id: 100,
// 	// 	item_id: [200, 201],
// 	// 	amount: 59.99
// 	// },
// 	// {
// 	// 	id: 101,
// 	// 	item_id: [200, 202],
// 	// 	amount: 99.99
// 	// },
// 	// {
// 	// 	id: 102,
// 	// 	item_id: [201, 202],
// 	// 	amount: 19.99
// 	// },
// 	// ])
// 	return Model.Order.create(
// 		{
// 			id: 100,
// 			item_id: [200, 201],
// 			amount: 59.99
// 		})
// 	.then( (orders) => {
// 		orders.addItem('item_id')
// 		console.log(orders.dataValues);
// 	})
// }

// var createItems = () => {
// 	return Model.Item.bulkCreate([
// 	{
// 		id: 200,
// 		name: 'Book',
// 		description: 'It has real pages',
// 		amount: 20
// 	},
// 	{
// 		id: 201,
// 		name: 'Chair',
// 		description: 'Makes standing optional',
// 		amount: 100
// 	},
// 	{
// 		id: 202,
// 		name: 'Carpet',
// 		description: 'Is this really the best way to buy carpet?',
// 		amount: 300
// 	}
// 	])
// 	.then( (items) => {
// 		console.log(items.dataValues);
// 	})
// }


createUsers()
.then(createPosts)
.then(createComments)
// .then(createOrders)
// .then(createItems)
.then(function() {
	process.exit();
});