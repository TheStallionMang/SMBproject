var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var jobTitle = new mongoose.Schema({

	JOB_TITLE: String,
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
jobTitle.plugin(autoIncrement.plugin, 'Job');
mongoose.model('Job', jobTitle);
