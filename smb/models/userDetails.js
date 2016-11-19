var mongoose = require('mongoose');

var userDetails = new mongoose.Schema({

	USERNAME: String,
	PASSWORD: String,
	EMP_REF_ID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Employee'
	},
	TRACKING_INFO:{
		CREATED_BY: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User' // User or Employee
		},
		CREATED_DATE:{
			type: Date,
			default: Date.now
		},
		UPDATED_BY: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User' // User or Employee
		},
		UPDATED_DATE:{
			type: Date,
			default: Date.now
		}
	}
});

mongoose.model('User', userDetails);