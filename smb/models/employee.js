var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var employee = new mongoose.Schema({

	EMP_ID: Number,
	SSN: String,
	FNAME: String,
	LNAME: String,
	JOB_ID: {
		type: String, 
		ref: 'Job'
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
	},
});

employee.plugin(autoIncrement.plugin, { model: 'Employee', field: 'EMP_ID' });

mongoose.model('Employee', employee);
