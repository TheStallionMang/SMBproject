var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Subsystem = mongoose.model('Subsystem');

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

//api for all subsystems
router.route('/')

    // create a new subsystem
    .post(function(req,res) {

    	var subsystem = new Subsystem();

    	subsystem.SUB_SYSTEM = 
    	subsystem.TRACKING_INFO.CREATED_BY =
        subsystem.TRACKING_INFO.CREATED_DATE =
        subsystem.TRACKING_INFO.UPDATED_BY =
        subsystem.TRACKING_INFO.UPDATED_DATE =

        subsystem.save(function(err, post) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(subsystem);
        });
    })

    // return all subsystems
    .get(function(req,res) {
        Subsystem.find(function(err, subsystem) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(subsystem);
        });
    });

//api for a specific subsystem
router.route('/:id')

    .put(function(req,res) {
        Subsystem.findById(req.params.id, function(err, subsystem) {
            if(err) {
                return res.send(err);
            }

	    	subsystem.SUB_SYSTEM = 
	    	subsystem.TRACKING_INFO.CREATED_BY =
	        subsystem.TRACKING_INFO.CREATED_DATE =
	        subsystem.TRACKING_INFO.UPDATED_BY =
	        subsystem.TRACKING_INFO.UPDATED_DATE =

            Subsystem.save(function(err, subsystem) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(subsystem);
            });
        });
    })

    .get(function(req,res) {
        Subsystem.findById(req.params.id, function(err, subsystem) {
            if(err) {
                return res.send(err);
            }
            return res.json(subsystem);
        });
    })

    .delete(function(req,res) {
        Subsystem.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
