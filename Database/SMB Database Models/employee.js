var mongoose = require('mongoose');

var employee = new mongoose.Schema({

EMP_ID: String,
SSN: String,
FNAME: String,
LNAME: String,
TRACKING_INFO:{
CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
}
JOB_ID:Schema.Types.ObjectId, 
});

