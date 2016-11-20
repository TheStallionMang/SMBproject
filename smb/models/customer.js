var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

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
		type: String,
		ref: 'User'
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
	}
});
customer.plugin(autoIncrement.plugin, 'Customer');
mongoose.model('Customer', customer);
