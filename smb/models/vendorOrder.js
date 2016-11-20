var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var vendorOrder = new mongoose.Schema({

	ORDER_DETAILS: [{
		ITEM: String,
		QUANTITY: Number
	}],
	DELIVERY_ADDRESS: {
		STREET:String,
		CITY:String,
		STATE:String
	},
	SHIPPING_TYPE: String,
	DESIRED_RECEIPT_DATE: {
		type:Date,
		default: Date.now
	},
	EST_SHIPPING_COST: Number,
	TOTAL_COST: Number,
	IS_APPROVED: Boolean,
	USER_REF_ID: {
		type: String,
		ref: 'User'
	},
	VENDOR_REF_ID: {
		type: String,
		ref: 'Vendor'
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
vendorOrder.plugin(autoIncrement.plugin, 'Order');
mongoose.model('Order', vendorOrder);
