
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User schema is embedded in Cat
var userSchema = new Schema ({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		unique: true,
		required: 'You must enter email'
	},
	password: {
		type: String,
		required: 'You need a password'
	},
	profileImage: String
});

// Cat schema has an embedded User associated 
var catSchema = new Schema ({
	name: {
		type: String,
		required: 'Cat name required'
	},
	town: {
		type: String,
		required: 'Town required'
	},
	state: {
		type: String,
		required: 'State required'
	},
	description: {
		type: String,
		required: 'Cat description required'
	},
	image: String,
	user: [userSchema]
});


var Cat = mongoose.model('cats', catSchema);

// database will be created upon initial connection
mongoose.connect('mongodb://localhost/mongo-crud');

module.exports = Cat; 
