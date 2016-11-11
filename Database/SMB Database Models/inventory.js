var mongoose = require('mongoose');


var inventory = new Schema({
	NAME: String,
	CONDITION: String,
	UNIT_PRICE: Number,
	VENDOR_REF_ID : Schema.Types.ObjectId,
	CATEGORY_REF_ID : Schema.Types.ObjectId,
	VENDOR_ORDER_REF_ID	: Schema.Types.ObjectId,
	TRACKING_INFO:{
	CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
	}
	});
