var mongoose = require('mongoose');

var vendor = new mongoose.Schema({

NAME: String,
ADDRESS: {STREET:String, CITY:String, STATE:String},
V_STATUS: String,
WEBSITE: String,
COMMENTS: String,
Email: String,
TRACKING_INFO:{
CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
}
});

