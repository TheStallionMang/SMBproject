var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

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

//api for all customers
router.route('/')

    // create a new customer
    .post(function(req,res) {

    	var customer = new Customer();

    	customer.FNAME = req.body.firstname;
    	customer.LNAME = req.body.lastname;
    	customer.ADDRESS.STREET = req.body.street;
    	customer.ADDRESS.CITY = req.body.city;
    	customer.ADDRESS.STATE = req.body.state;
    	customer.PAYMENT_TYPE = req.body.payment;
    	customer.PHONE = req.body.phone;
    	customer.EMAIL = req.body.email;
    	customer.CARD_NUMBER = req.body.card;
    	//customer.USER_REF_ID = req.body.
    	customer.TRACKING_INFO.CREATED_BY = req.body.updated_by;
        customer.TRACKING_INFO.CREATED_DATE = req.body.updated_at;
        customer.TRACKING_INFO.UPDATED_BY = req.body.updated_by;
        customer.TRACKING_INFO.UPDATED_DATE = req.body.updated_at;

        customer.save(function(err, customer) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(customer);
        });
    })

    // return all customers
    .get(function(req,res) {
        Customer.find(function(err, customer) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(customer);
        });
    });

//api for a specific customer
router.route('/:id')

    .put(function(req,res) {
        Transaction.findById(req.params.id, function(err, customer) {
            if(err) {
                return res.send(err);
            }

	    	customer.CUST_ID =
	    	customer.FNAME = 
	    	customer.LNAME =
	    	customer.ADDRESS.STREET =
	    	customer.ADDRESS.CITY =
	    	customer.ADDRESS.STATE =
	    	customer.PAYMENT_TYPE =
	    	customer.PHONE =
	    	customer.EMAIL =
	    	customer.CARD_NUMBER = 
	    	customer.USER_REF_ID =
	    	customer.TRACKING_INFO.CREATED_BY =
	        customer.TRACKING_INFO.CREATED_DATE =
	        customer.TRACKING_INFO.UPDATED_BY =
	        customer.TRACKING_INFO.UPDATED_DATE =

            customer.save(function(err, customer) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(customer);
            });
        });
    })

    .get(function(req,res) {
        Customer.findById(req.params.id, function(err, customer) {
            if(err) {
                return res.send(err);
            }
            return res.json(customer);
        });
    })

    .delete(function(req,res) {
        Customer.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
