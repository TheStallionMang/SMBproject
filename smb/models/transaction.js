var mongoose = require('mongoose');

var transaction = new mongoose.Schema({
	TRANS_TYPE: String,
	SCHEDULE_STATUS: String,
	QUANTITY: Number,
	SHIPPING_TYPE: String,
	TOTAL_COST: Number,
	DELIVERY_STATUS: String,
	INVENTORY_REF_ID: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Inventory'
	}],
	CUSTOMER_REF_ID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
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

mongoose.model('Transaction', transaction);