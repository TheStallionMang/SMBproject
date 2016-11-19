var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

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

//api for all orders
router.route('/')

    // create a new order
    .post(function(req,res) {

    	var order = new Order();

    	order.ORDER_DETAILS = 
    	order.DELIVERY_ADDRESS.STREET =
    	order.DELIVERY_ADDRESS.CITY =
    	order.DELIVERY_ADDRESS.STATE =
    	order.SHIPPING_TYPE = 
    	order.DESIRED_RECEIPT_DATE = 
    	order.EST_SHIPPING_COST = 
    	order.TOTAL_COST = 
    	order.IS_APPROVED = 
    	order.EMP_REF_ID =
    	order.VENDOR_REF_ID = 
    	order.TRACKING_INFO.CREATED_BY =
        order.TRACKING_INFO.CREATED_DATE =
        order.TRACKING_INFO.UPDATED_BY =
        order.TRACKING_INFO.UPDATED_DATE =

        order.save(function(err, order) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(order);
        });
    })

    // return all order
    .get(function(req,res) {
        Order.find(function(err, order) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(order);
        });
    });

//api for a specific order
router.route('/:id')

    .put(function(req,res) {
        Order.findById(req.params.id, function(err, order) {
            if(err) {
                return res.send(err);
            }

	    	order.ORDER_DETAILS = 
	    	order.DELIVERY_ADDRESS.STREET =
	    	order.DELIVERY_ADDRESS.CITY =
	    	order.DELIVERY_ADDRESS.STATE =
	    	order.SHIPPING_TYPE = 
	    	order.DESIRED_RECEIPT_DATE = 
	    	order.EST_SHIPPING_COST = 
	    	order.TOTAL_COST = 
	    	order.IS_APPROVED = 
	    	order.EMP_REF_ID =
	    	order.VENDOR_REF_ID = 
	    	order.TRACKING_INFO.CREATED_BY =
	        order.TRACKING_INFO.CREATED_DATE =
	        order.TRACKING_INFO.UPDATED_BY =
	        order.TRACKING_INFO.UPDATED_DATE =

            order.save(function(err, order) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(order);
            });
        });
    })

    .get(function(req,res) {
        Order.findById(req.params.id, function(err, order) {
            if(err) {
                return res.send(err);
            }
            return res.json(order);
        });
    })

    .delete(function(req,res) {
        Order.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
