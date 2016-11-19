var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

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

//api for all users
router.route('/')

    /* // create a new inventory item
    .post(function(req,res) {

    	var user = new User();

    	user.USERNAME = 
        user.PASSWORD =
        user.EMP_REF_ID = 
    	user.TRACKING_INFO.CREATED_BY =
        user.TRACKING_INFO.CREATED_DATE =
        user.TRACKING_INFO.UPDATED_BY =
        user.TRACKING_INFO.UPDATED_DATE =

        user.save(function(err, user) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(user);
        });
    })
    */

    // return all users
    .get(function(req,res) {
        User.find(function(err, user) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(user);
        });
    });

//api for a specific user
router.route('/:id')

    .put(function(req,res) {
        User.findById(req.params.id, function(err, user) {
            if(err) {
                return res.send(err);
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

	    	user.USERNAME = 
            user.PASSWORD =
            user.EMP_REF_ID = 
            user.TRACKING_INFO.CREATED_BY =
            user.TRACKING_INFO.CREATED_DATE =
            user.TRACKING_INFO.UPDATED_BY =
            user.TRACKING_INFO.UPDATED_DATE =

            user.save(function(err, user) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(user);
            });
        });
    })

    .get(function(req,res) {
        user.findById(req.params.id, function(err, user) {
            if(err) {
                return res.send(err);
            }
            return res.json(user);
        });
    })

    .delete(function(req,res) {
        User.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
