var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var category = new mongoose.Schema({

	CATEGORY: String,
	TRACKING_INFO:{
		CREATED_BY: {
			type: String,
			ref: 'User' // User or Employee
		},
		CREATED_DATE:{
			type: Date,
			default: Date.now
		},
		UPDATED_BY: {
			type: String,
			ref: 'User' // User or Employee
		},
		UPDATED_DATE:{
			type: Date,
			default: Date.now
		}
	}
});
category.plugin(autoIncrement.plugin, 'Category');
mongoose.model('Category', category);
