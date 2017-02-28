//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://micahwierenga@localhost:5432/sequelize_blog');

//Export models and Sequelize for seed and dbSetup

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var User = sequelize.import("./user");
var Post = sequelize.import("./post");
var Comment = sequelize.import("./comment");
var Order = sequelize.import("./order");
var Item = sequelize.import("./item");

// User Relationships

User.hasMany(Post);
Post.belongsTo(User);

// Post Relationships

Post.hasMany(Comment);
Comment.belongsTo(Post);


module.exports.models = {
	User: User,
	Post: Post,
	Comment: Comment,
	Order: Order,
	Item: Item
};