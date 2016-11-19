var mongoose = require('mongoose');

var vendorOrder = new mongoose.Schema({

	ORDER_DETAILS: [{
		ITEM: String,
		Quantity:Number
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
	EMP_REF_ID: mongoose.Schema.Types.ObjectId,
	VENDOR_REF_ID: mongoose.Schema.Types.ObjectId,
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

mongoose.model('Order', vendorOrder);