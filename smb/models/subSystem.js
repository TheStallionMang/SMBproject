var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var subSystem = new mongoose.Schema({

	SUB_SYSTEM: String,
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
subSystem.plugin(autoIncrement.plugin, 'Subsystem');
mongoose.model('Subsystem', subSystem);
