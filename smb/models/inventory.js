var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var inventory = new mongoose.Schema({
	NAME: String,
	CONDITION: String,
	UNIT_PRICE: Number,
	IMG_URL: String,
	VENDOR_REF_ID : {
		type: String,
		ref: 'Vendor'
	},
	CATEGORY_REF_ID: {
		type: String,
		ref: 'Category'
	},
	VENDOR_ORDER_REF_ID: {
		type: String,
		ref: 'Order'
	},
	TRACKING_INFO:{
		CREATED_BY: {
			type: String,
			ref: 'User' // User or Employee
		},
		CREATED_DATE:{
			type: Date,
			default:Date.now
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
inventory.plugin(autoIncrement.plugin, 'Inventory');
mongoose.model('Inventory', inventory);
