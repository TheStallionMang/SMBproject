var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');

/*router.use(function(req, res, next) {
	if (req.method === "GET") {
		//continue to the next middleware or request handler
		return next();
	}
	if (!req.isAuthenticated()) {
		//user not authenticates, redirect to login
		return res.redirect('/#login');
	}
	
	//user authenticated continue to next middleware or handler
	return next();
});
*/

//api for all transactions
router.route('/')

    // create a new transaction
    .post(function(req,res) {

    	var transaction = new Transaction();

    	transaction.TRANS_TYPE = req.body.transType;
    	transaction.SCHEDULE_STATUS = req.body.status;
    	//transaction.QUANTITY = 
    	transaction.SHIPPING_TYPE = req.body.shipType;
    	transaction.TOTAL_COST = req.body.total;
    	transaction.DELIVERY_STATUS = req.body.delivStatus;
    	//transaction.INVENTORY_REF_ID =
    	//transaction.CUSTOMER_REF_ID = 
    	transaction.TRACKING_INFO.CREATED_BY = req.body.created_by;
        transaction.TRACKING_INFO.CREATED_DATE = req.body.created_at;
        transaction.TRACKING_INFO.UPDATED_BY = req.body.updated_by;
        transaction.TRACKING_INFO.UPDATED_DATE = req.body.updated_at;

        transaction.save(function(err, transaction) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(transaction);
        });
    })

    // return all transactions
    .get(function(req,res) {
        Transaction.find(function(err, transaction) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(transaction);
        });
    });

//api for a specific transaction
router.route('/:id')

    .put(function(req,res) {
        Transaction.findById(req.params.id, function(err, transaction) {
            if(err) {
                return res.send(err);
            }

	    	transaction.TRANS_TYPE =
	    	transaction.SCHEDULE_STATUS = 
	    	transaction.QUANTITY =
	    	transaction.SHIPPING_TYPE =
	    	transaction.TOTAL_COST =
	    	transaction.DELIVERY_STATUS =
	    	transaction.INVENTORY_REF_ID =
	    	transaction.CUSTOMER_REF_ID = 
	    	transaction.TRACKING_INFO.CREATED_BY =
	        transaction.TRACKING_INFO.CREATED_DATE =
	        transaction.TRACKING_INFO.UPDATED_BY =
	        transaction.TRACKING_INFO.UPDATED_DATE =

            transaction.save(function(err, transaction) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(transaction);
            });
        });
    })

    .get(function(req,res) {
        Transaction.findById(req.params.id, function(err, transaction) {
            if(err) {
                return res.send(err);
            }
            return res.json(transaction);
        });
    })

    .delete(function(req,res) {
        Transaction.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
