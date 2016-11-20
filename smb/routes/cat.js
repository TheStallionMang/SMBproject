var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');

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

//api for all categories
router.route('/')

    // create a new category
    .post(function(req,res) {

    	var category = new Category();

    	category.CATEGORY = req.body.name;
    	category.TRACKING_INFO.CREATED_BY = req.body.created_by;
        category.TRACKING_INFO.CREATED_DATE = req.body.created_at;
        category.TRACKING_INFO.UPDATED_BY = req.body.updated_by;
        category.TRACKING_INFO.UPDATED_DATE = req.body.updated_at;

        category.save(function(err, category) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(category);
        });
    })

    // return all categories
    .get(function(req,res) {
        Category.find(function(err, category) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(category);
        });
    });

//api for a specific category
router.route('/:id')

    .put(function(req,res) {
        Category.findById(req.params.id, function(err, category) {
            if(err) {
                return res.send(err);
            }

	    	category.CATEGORY =
	    	category.TRACKING_INFO.CREATED_BY =
	        category.TRACKING_INFO.CREATED_DATE =
	        category.TRACKING_INFO.UPDATED_BY =
	        category.TRACKING_INFO.UPDATED_DATE =

            category.save(function(err, category) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(category);
            });
        });
    })

    .get(function(req,res) {
        Category.findById(req.params.id, function(err, category) {
            if(err) {
                return res.send(err);
            }
            return res.json(category);
        });
    })

    .delete(function(req,res) {
        Category.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
