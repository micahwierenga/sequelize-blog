module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define('post', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// user_id: {
		// 	type: Sequelize.INTEGER,
		// 	allowNull: false
		// },
		title: {
			type: Sequelize.TEXT
		},
		content: {
			type: Sequelize.TEXT
		},
		created_at: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updated_at: Sequelize.DATE,
		deleted_at: Sequelize.DATE
	},
	{
		underscored: true
	});
	return model;
};