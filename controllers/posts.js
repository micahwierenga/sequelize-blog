var db = require('../models');
var User = db.models.User;
var Post = db.models.Post;
var Comment = db.models.Comment;




function index(req, res) {
	Post.findAll()
  .then(function(posts) {
    res.json(posts);
	});
}




function show(req, res) {
  Post.findById(req.params.id)
  .then(function(post){
    res.json(post);
  });	
}



























function create(req, res) {
	Post.create(req.body)
    .then(function(post){
      res.json(post);
    })
    .catch(function(err) {
      console.log(err)
    });
}

function update(req, res) {
  Post.findById(req.params.id)
  .then(function(post){
    return post.updateAttributes(req.body);
  })
  .then(function(post){
    res.json(post);
  });
}

function destroy(req, res) {
  Post.findById(req.params.id)
  .then(function(post){
    return post.destroy();
  })
  .then(function(){
    res.redirect("/posts");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;