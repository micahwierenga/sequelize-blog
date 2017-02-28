# Sequelize Associations

## What is Sequelize?

>Sequelize is a promise-based ORM (object-relational mapping) framework for Node.js and io.js, allowing the developer to write object-oriented JS, which is then translated into a SQL dialect (supports PostgreSQL, MySQL, MariaDB, SQLite and MSSQL).

As an example, let's say we have the following User model for a blog:

```
module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
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
	});
	return model;
};
```

Along with the following User controller that will execute on `/api/users` page load:

```
app.get('/api/users', function index(req, res) {
	User.findAll()
  .then(function(users) {
    res.json(users);
  })
})
```

Sequelize translates this JS into the following query:

`SELECT "id", "username", "role", "created_at", "updated_at", "deleted_at" FROM "users" AS "user";`


## Sequelize writes JOIN queries

### One-to-Many

<img src = sequelize-blog-associations-diagram.png width = 75%>

Sequelize lets us define these relationships in two steps:

1. Declaring associations between tables

2. Based on those associations, identifying when a route/controller should include data from other tables


### 1. Declaring Associations

When defining associations, the foreign key is added to the target model. Consider the following syntax:

`sourceModel.hasMany(targetModel);`
`targetModel.belongsTo(sourceModel);`

Example: `User.hasMany(Post);`

### 2. Including Associations

Example:

```
app.get('/api/users', function index(req, res) {
	User.findAll({ include: [Post] })
  .then(function(users) {
    res.json(users);
  })
})
```


## Resources

- [Sequelize Docs](http://docs.sequelizejs.com/en/v3/)
- [More about sync](http://sequelize.readthedocs.io/en/latest/api/sequelize/#sync)