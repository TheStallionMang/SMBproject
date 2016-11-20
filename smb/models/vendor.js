var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

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
vendor.plugin(autoIncrement.plugin, 'Vendor');
mongoose.model('Vendor', vendor);
