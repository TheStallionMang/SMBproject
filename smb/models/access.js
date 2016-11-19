var mongoose = require('mongoose');

var access = new mongoose.Schema({

	ISCREATE: Boolean,
	ISREAD: Boolean,
	ISUPDATE: Boolean,
	ISDELETE: Boolean,
	EMP_REF_ID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Employee'
	},
	SS_REF_ID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Subsystem'
	},
	USER_REF_ID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	TRACKING_INFO:{
		CREATED_BY: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User' // User or Employee
		},
		CREATED_DATE: {
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

mongoose.model('Access', access);