var db = require('../models');
var Comment = db.models.Comment;
var User = db.models.User;
var Post = db.models.Post;

function index(req, res) {
	Comment.findAll({
    include: [
    {
      model: Post,
      include: [
      {
        model: User
      }]
    }]
  })
    .then(function(comments) {
		  res.json(comments);
	  });
}

function show(req, res) {
  Comment.findById(req.params.id)
  .then(function(comment){
    res.json(comment);
  });	
}

function create(req, res) {
	Comment.create(req.body).then(function(comment){
    res.json(comment);
  });
}

function update(req, res) {
  Comment.findById(req.params.id)
  .then(function(comment){
    return comment.updateAttributes(req.body);
  })
  .then(function(comment){
    res.json(comment);
  });
}

function destroy(req, res) {
  Comment.findById(req.params.id)
  .then(function(comment){
    return comment.destroy();
  })
  .then(function(){
    res.redirect("/comments");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;