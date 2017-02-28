var express = require('express');
var app = express.Router();

var db = require('../models');
var User = db.models.User;
var Post = db.models.Post;
var Comment = db.models.Comment;





function index(req, res) {
	User.findAll()
  .then(function(users) {
    res.json(users);
  })
}




function show(req, res) {
  User.findById(req.params.id)
  .then(function(user){
    res.json(user);
  });	
}



























function create(req, res) {
	User.create(req.body)
    .then(function(user){
      res.json(user);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function update(req, res) {
  User.findById(req.params.id)
  .then(function(user){
    return user.updateAttributes(req.body);
  })
  .then(function(user){
    res.json(user);
  });
}

function destroy(req, res) {
  User.findById(req.params.id)
  .then(function(user){
    return user.destroy();
  })
  .then(function(){
    res.redirect("/users");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;