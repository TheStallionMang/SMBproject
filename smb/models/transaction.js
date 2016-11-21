var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var transaction = new mongoose.Schema({
	TRANS_TYPE: String,
	SCHEDULE_STATUS: String,
	QUANTITY: Number,
	SHIPPING_TYPE: String,
	TOTAL_COST: Number,
	DELIVERY_STATUS: String,
	INVENTORY_REF_ID: [{
		type: String,
		ref: 'Inventory'
	}],
	CUSTOMER_REF_ID: {
		type: String,
		ref: 'Customer'
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

transaction.plugin(autoIncrement.plugin, 'Transaction');
mongoose.model('Transaction', transaction);
