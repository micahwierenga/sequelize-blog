module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define('comment', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		post_id: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		content: {
			type: Sequelize.TEXT
		},
		commenter_username: {
			type: Sequelize.STRING
		},
		status: {
			type: Sequelize.ENUM,
			values: ['approved', 'rejected', 'in review']
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