db.SMB_IM_TRANSACTION.insert([{_id:1, TRANS_TYPE:"Sale", SCHEDULE_STATUS:"actual", QUANTITY:4,SHIPPING_TYPE:"Express",TOTAL_COST:70,DELIVERY_STATUS:"Delivered",INVENTORY_REF_ID:db.SMB_IM_INVENTORY.findOne({NAME:"Reflector"})._id,CUSTOMER_REF_ID:db.SMB_CD_CUSTOMER.findOne({FNAME:"Sreerag"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:2, TRANS_TYPE:"Promo", SCHEDULE_STATUS:"Planned", QUANTITY:1,SHIPPING_TYPE:"Express",TOTAL_COST:65,DELIVERY_STATUS:"Shipped",INVENTORY_REF_ID:db.SMB_IM_INVENTORY.findOne({NAME:"Jacket"})._id,CUSTOMER_REF_ID:db.SMB_CD_CUSTOMER.findOne({LNAME:"Gomez"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}},{_id:3, TRANS_TYPE:"Sale", SCHEDULE_STATUS:"Palnned", QUANTITY:2,SHIPPING_TYPE:"2-Day",TOTAL_COST:50,DELIVERY_STATUS:"Yet to Ship",INVENTORY_REF_ID:db.SMB_IM_INVENTORY.findOne({NAME:"Gear"})._id,CUSTOMER_REF_ID:db.SMB_CD_CUSTOMER.findOne({FNAME:"Ben"})._id,TRACKING_INFO:{CREATED_BY:"SS",CREATED_DATE:"11-03-2016",UPDATED_BY:"SS",UPDATED_DATE:"11-03-2016"}}])  
