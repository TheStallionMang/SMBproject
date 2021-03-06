var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Inventory = mongoose.model('Inventory');
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

//api for all inventory items
router.route('/')

    // create a new inventory item
    .post(function(req,res) {

        var item = new Inventory();

        item.NAME = req.body.name;
        item.CONDITION = req.body.condition;
        item.UNIT_PRICE = req.body.price;
        item.IMG_URL = req.body.img;
        //item.VENDOR_REF_ID = vendor;
        item.CATEGORY_REF_ID = req.body.category;
        item.VENDOR_ORDER_REF_ID = req.body.orderNum;
        item.TRACKING_INFO.CREATED_BY = req.body.created_by;
        item.TRACKING_INFO.CREATED_DATE = req.body.created_at;
        item.TRACKING_INFO.UPDATED_BY = req.body.upated_by;
        item.TRACKING_INFO.UPDATED_DATE = req.body.updated_at;

        item.save(function(err, item) {
            if(err) {
                return res.send(500, err);
            }
            return res.json(item);
        });

    })

    // return all items
    .get(function(req,res) {
        Inventory.find(function(err, items) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(items);
        });
    });

//api for a specific item
router.route('/:id')

    .put(function(req,res) {
        Inventory.findById(req.params.id, function(err, item) {
            if(err) {
                return res.send(err);
            }

            item.NAME = 
            item.CONDITION = 
            item.UNIT_PRICE = 
            item.VENDOR_REF_ID = 
            item.CATEGORY_REF_ID = 
            item.VENDOR_ORDER_REF_ID = 
            item.TRACKING_INFO.CREATED_BY =
            item.TRACKING_INFO.CREATED_DATE =
            item.TRACKING_INFO.UPDATED_BY =
            item.TRACKING_INFO.UPDATED_DATE =

            item.save(function(err, item) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(item);
            });
        });
    })

    .get(function(req,res) {
        Inventory.findById(req.params.id, function(err, item) {
            if(err) {
                return res.send(err);
            }
            return res.json(item);
        });
    })

    .delete(function(req,res) {
        Inventory.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
