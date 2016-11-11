var mongoose = require('mongoose');

var userDetails = new mongoose.Schema({

USERNAME: String,
PASSWORD: String,
EMP_REF_ID: Schema.Types.ObjectId,
TRACKING_INFO:{
CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
}
});

