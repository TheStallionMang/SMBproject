var mongoose = require('mongoose');

var vendor = new mongoose.Schema({

	NAME: String,
	ADDRESS: {
		STREET: String,
		CITY: String,
		STATE: String
	},
	V_STATUS: String,
	WEBSITE: String,
	COMMENTS: String,
	EMAIL: String,
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

mongoose.model('Vendor', vendor);