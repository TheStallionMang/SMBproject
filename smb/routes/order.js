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
        var dataRes = JSON.stringify(req.body.item.item);
    	var order = new Order();
        order.ORDER_DETAILS = req.body.item;
    	order.DELIVERY_ADDRESS.STREET = req.body.STREET;
    	order.DELIVERY_ADDRESS.CITY = req.body.city;
    	order.DELIVERY_ADDRESS.STATE = req.body.state;
    	order.SHIPPING_TYPE = req.body.shipping;
    	order.DESIRED_RECEIPT_DATE = req.body.receipt;
    	//order.TOTAL_COST = 
    	//order.IS_APPROVED = 
    	//order.EMP_REF_ID =
    	order.VENDOR_REF_ID = req.body.vendor
    	order.TRACKING_INFO.CREATED_BY = req.body.created_by;
        order.TRACKING_INFO.CREATED_DATE = req.body.created_at;
        order.TRACKING_INFO.UPDATED_BY = req.body.updated_by;
        order.TRACKING_INFO.UPDATED_DATE = req.body.updated_at;

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
                    console.log("not good111");
        Order.findById(req.params.id, function(err, order) {
                        console.log("not good");
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
