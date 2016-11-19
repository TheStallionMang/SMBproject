var mongoose = require('mongoose');

var customer = new mongoose.Schema({
	CUST_ID: Number,
	FNAME: String,
	LNAME: String,
	ADDRESS: {
		STREET: String,
		CITY: String,
		STATE: String
	},
	PAYMENT_TYPE: String,
	PHONE: Number,
	EMAIL: String,
	CARD_NUMBER	: String,
	USER_REF_ID: { //Why do we need this? For future online shoppers?
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
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

mongoose.model('Customer', customer);