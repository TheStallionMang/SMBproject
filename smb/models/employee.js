var mongoose = require('mongoose');

var employee = new mongoose.Schema({

	EMP_ID: String,
	SSN: String,
	FNAME: String,
	LNAME: String,
	JOB_ID: {
		type: String, 
		ref: 'Job'
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
	},
});

mongoose.model('Employee', employee);