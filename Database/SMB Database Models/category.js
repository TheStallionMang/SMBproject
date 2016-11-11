var mongoose = require('mongoose');

var category = new mongoose.Schema({

Category: String,
TRACKING_INFO:{
CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
}
});
