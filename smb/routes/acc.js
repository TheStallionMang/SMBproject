var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Access = mongoose.model('Access');

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

    // create a new access permission
    .post(function(req,res) {

    	var access = new Access();

        access.ISCREATE = 
    	access.ISREAD =
        access.ISUPDATE =
        access.ISDELETE = 
        access.EMP_REF_ID =
        access.SS_REF_ID =
        access.USER_REF_ID
    	access.TRACKING_INFO.CREATED_BY =
        access.TRACKING_INFO.CREATED_DATE =
        access.TRACKING_INFO.UPDATED_BY =
        access.TRACKING_INFO.UPDATED_DATE =

        access.save(function(err, access) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(access);
        });
    })

    // return all access permissions
    .get(function(req,res) {
        Access.find(function(err, access) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(access);
        });
    });

//api for a specific access permission
router.route('/:id')

    .put(function(req,res) {
        Access.findById(req.params.id, function(err, access) {
            if(err) {
                return res.send(err);
            }

	    	access.ISCREATE = 
            access.ISREAD =
            access.ISUPDATE =
            access.ISDELETE = 
            access.EMP_REF_ID =
            access.SS_REF_ID =
            access.USER_REF_ID
            access.TRACKING_INFO.CREATED_BY =
            access.TRACKING_INFO.CREATED_DATE =
            access.TRACKING_INFO.UPDATED_BY =
            access.TRACKING_INFO.UPDATED_DATE =

            access.save(function(err, access) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(access);
            });
        });
    })

    .get(function(req,res) {
        Access.findById(req.params.id, function(err, access) {
            if(err) {
                return res.send(err);
            }
            return res.json(access);
        });
    })

    .delete(function(req,res) {
        Access.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
