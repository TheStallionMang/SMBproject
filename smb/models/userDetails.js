var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var userDetails = new mongoose.Schema({

	USERNAME: String,
	PASSWORD: String,
	EMP_REF_ID: {
		type: String,
		ref: 'Employee'
	},
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
userDetails.plugin(autoIncrement.plugin, 'User');
mongoose.model('User', userDetails);
