var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://admin:admin123@ds111718.mlab.com:11718/smb');

autoIncrement.initialize(connection);

var access = new mongoose.Schema({
	
	ISCREATE: Boolean,
	ISREAD: Boolean,
	ISUPDATE: Boolean,
	ISDELETE: Boolean,
	EMP_REF_ID: {
		type: String,
		ref: 'Employee'
	},
	SS_REF_ID: {
		type: String,
		ref: 'Subsystem'
	},
	USER_REF_ID: {
		type: String,
		ref: 'User'
	},
	TRACKING_INFO:{
		CREATED_BY: {
			type: String,
			ref: 'User' // User or Employee
		},
		CREATED_DATE: {
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
access.plugin(autoIncrement.plugin, 'Access');

mongoose.model('Access', access);
