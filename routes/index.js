var express = require('express');
var router = express.Router();
var Cat = require('../database.js');


/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Forever Feline API' });
});

/* POST a new cat */ 
router.post('/cats', function(req, res, next) {
	var newCat = new Cat({name: req.body.name, town: req.body.town, state: req.body.state, description: req.body.description, user: req.body.user});
	newCat.save(function(err, data){
		if (err) {
			res.json(err);
		}
		else {
			res.json(data);
		}
	});
});


/* GET all cats */
router.get('/cats', function(req, res, next) {
	Cat.find({}, function(err, data){
		if (err) {
			res.json(err);
		}
		else if (data.length===0) {
			res.json({message: 'There are no cats in the database.'});
		}
		else {
			res.json(data);
		}
	});
});

/* GET one cat */
router.get('/cats/:id', function(req, res, next) {
	Cat.find({_id: req.params.id}, function(err, data){
		if (err) {
			res.json(err.message);
		}
		else if (data.length===0) {
			res.json({message: 'A cat with that id does not exist in this database.'});
		}
		else {
			res.json(data);
		}
	});
});

/* UPDATE one cat */
router.put('/cats/:id', function(req, res, next) {
	var id = {_id: req.params.id};
	var update = {name: req.body.name, town: req.body.town, state: req.body.state, description: req.body.description, user: req.body.user};
	var options = {new: true};

	Cat.findOneAndUpdate(id, update, options, function(err, data){
		if (err) {
			res.json(err.message);
		}
		else {
			res.json(data);
		}
	});
});


/* DELETE one cat */
router.delete('/cats/:id', function(req, res, next) {
	Cat.findOneAndRemove({_id: req.params.id}, function(err, data){
		if (err) {
			res.json(err.message);
		}
		else if (data.length===0) {
			res.json({message: 'A cat with that id does not exist in this database.'});
		}
		else {
			res.json({message: 'Success. Cat deleted.'});
		}
	});
});

module.exports = router;
