module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
			// allowNull: false,
		},
		username: {
			type: Sequelize.STRING,
			required: true
		},
		role: {
			type: Sequelize.ENUM,
			values: ['user', 'admin', 'disabled']
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
	}
	);
	return model;
};