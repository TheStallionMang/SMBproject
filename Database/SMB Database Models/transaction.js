var mongoose = require('mongoose');

var transaction = new mongoose.Schema({
	TRANS_TYPE: String,
	SCHEDULE_STATUS: String,
	QUANTITY: Number,
	SHIPPING_TYPE: String,
	TOTAL_COST: Number,
	DELIVERY_STATUS: String,
	INVENTORY_REF_ID: Schema.Types.ObjectId,
	CUSTOMER_REF_ID: Schema.Types.ObjectId,
	TRACKING_INFO:{
	CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
	}
	});
