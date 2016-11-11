var mongoose = require('mongoose');

var customer = new mongoose.Schema({
	CUST_ID: Number,
	FNAME: String,
	LNAME: String,
	ADDRESS: {STREET:String, CITY:String, STATE:String},
	PAYMENT_TYPE: String,
	PHONE: Number,
	EMAIL: String,
	CARD_NUMBER	: String,
	USER_REF_ID: Schema.Types.ObjectId,
	TRACKING_INFO:{
	CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
	}
	});


