var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vendor = mongoose.model('Vendor');

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

//api for all vendors
router.route('/')

    // create a new vendor
    .post(function(req,res) {

    	var vendor = new Vendor();

    	vendor.NAME =
        vendor.ADDRESS.STREET =
        vendor.ADDRESS.CITY =
        vendor.ADDRESS.STATE
        vendor.V_STATUS = 
        vendor.WEBSITE =
        vendor.COMMENTS =
        vendor.EMAIL =
    	vendor.TRACKING_INFO.CREATED_BY =
        vendor.TRACKING_INFO.CREATED_DATE =
        vendor.TRACKING_INFO.UPDATED_BY =
        vendor.TRACKING_INFO.UPDATED_DATE =

        Vendor.save(function(err, vendor) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(vendor);
        });
    })

    // return all vendors
    .get(function(req,res) {
        Vendor.find(function(err, vendor) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(vendor);
        });
    });

//api for a specific vendor
router.route('/:id')

    .put(function(req,res) {
        Vendor.findById(req.params.id, function(err, vendor) {
            if(err) {
                return res.send(err);
            }

            vendor.NAME =
            vendor.ADDRESS.STREET =
            vendor.ADDRESS.CITY =
            vendor.ADDRESS.STATE
            vendor.V_STATUS = 
            vendor.WEBSITE =
            vendor.COMMENTS =
            vendor.EMAIL =
	    	vendor.TRACKING_INFO.CREATED_BY =
	        vendor.TRACKING_INFO.CREATED_DATE =
	        vendor.TRACKING_INFO.UPDATED_BY =
	        vendor.TRACKING_INFO.UPDATED_DATE =

            vendor.save(function(err, vendor) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(vendor);
            });
        });
    })

    .get(function(req,res) {
        Vendor.findById(req.params.id, function(err, vendor) {
            if(err) {
                return res.send(err);
            }
            return res.json(vendor);
        });
    })

    .delete(function(req,res) {
        Vendor.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
