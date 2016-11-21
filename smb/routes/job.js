var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Job = mongoose.model('Job');

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

//api for all jobs
router.route('/')

    // create a new job
    .post(function(req,res) {

    	var job = new Job();

    	job.JOB_TITLE = req.body.title;
    	job.TRACKING_INFO.CREATED_BY = req.body.created_by;
        job.TRACKING_INFO.CREATED_DATE = req.body.created_at;
        job.TRACKING_INFO.UPDATED_BY = req.body.updated_by;
        job.TRACKING_INFO.UPDATED_DATE = req.body.updated_by;

        job.save(function(err, job) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(job);
        });
    })

    // return all jobs
    .get(function(req,res) {
        Job.find(function(err, job) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(job);
        });
    });

//api for a specific job
router.route('/:id')

    .put(function(req,res) {
        Job.findById(req.params.id, function(err, job) {
            if(err) {
                return res.send(err);
            }

	    	job.JOB_TITLE 
	    	job.TRACKING_INFO.CREATED_BY =
	        job.TRACKING_INFO.CREATED_DATE =
	        job.TRACKING_INFO.UPDATED_BY =
	        job.TRACKING_INFO.UPDATED_DATE =

            Job.save(function(err, job) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(job);
            });
        });
    })

    .get(function(req,res) {
        Job.findById(req.params.id, function(err, job) {
            if(err) {
                return res.send(err);
            }
            return res.json(job);
        });
    })

    .delete(function(req,res) {
        Job.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
