var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	created_at: {
		type: Date,
		default: Date.now
	}
	updated_date: {
		type: Date,
		default: Date.now
	}
});
