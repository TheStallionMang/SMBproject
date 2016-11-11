var mongoose = require('mongoose');

var access = new mongoose.Schema({

ISREAD: Boolean,
ISCREATE: Boolean,
ISDELETE: Boolean,
ISUPDATE: Boolean,
EMP_REF_ID:Schema.Types.ObjectId,
SS_REF_ID:Schema.Types.ObjectId,
USER_REF_ID:Schema.Types.ObjectId,
TRACKING_INFO:{
CREATED_BY: String, CREATED_DATE:{type:Date, default:Date.now},UPDATED_BY: String, UPDATED_DATE:{type:Date, default:Date.now}
}
});

