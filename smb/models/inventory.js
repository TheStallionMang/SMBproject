var mongoose = require('mongoose');

var inventory = new mongoose.Schema({
	NAME: String,
	CONDITION: String,
	UNIT_PRICE: Number,
	VENDOR_REF_ID : {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Vendor'
	},
	CATEGORY_REF_ID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category'
	},
	VENDOR_ORDER_REF_ID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order'
	},
	TRACKING_INFO:{
		CREATED_BY: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User' // User or Employee
		},
		CREATED_DATE:{
			type: Date,
			default:Date.now
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

mongoose.model('Inventory', inventory);