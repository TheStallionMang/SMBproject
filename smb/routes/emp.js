var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

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

//api for all employees
router.route('/')

    // create a new employee
    .post(function(req,res) {

    	var employee = new Employee();

    	employee.EMP_ID =
    	employee.SSN = 
    	employee.QUANTITY =
    	employee.FNAME =
    	employee.LNAME = 
    	employee.JOB_ID =
    	employee.TRACKING_INFO.CREATED_BY =
        employee.TRACKING_INFO.CREATED_DATE =
        employee.TRACKING_INFO.UPDATED_BY =
        employee.TRACKING_INFO.UPDATED_DATE =

        employee.save(function(err, employee) {
        	if(err) {
        		return res.send(500, err);
        	}
        	return res.json(employee);
        });
    })

    // return all employees
    .get(function(req,res) {
        Employee.find(function(err, employee) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(employee);
        });
    });

//api for a specific employee
router.route('/:id')

    .put(function(req,res) {
        Employee.findById(req.params.id, function(err, employee) {
            if(err) {
                return res.send(err);
            }

	    	employee.EMP_ID =
	    	employee.SSN = 
	    	employee.QUANTITY =
	    	employee.FNAME =
	    	employee.LNAME = 
	    	employee.JOB_ID
	    	employee.TRACKING_INFO.CREATED_BY =
	        employee.TRACKING_INFO.CREATED_DATE =
	        employee.TRACKING_INFO.UPDATED_BY =
	        employee.TRACKING_INFO.UPDATED_DATE =
            employee.save(function(err, employee) {
                if(err) {
                    return res.send(500, err);
                }
                return res.json(employee);
            });
        });
    })

    .get(function(req,res) {
        Employee.findById(req.params.id, function(err, employee) {
            if(err) {
                return res.send(err);
            }
            return res.json(employee);
        });
    })

    .delete(function(req,res) {
        Employee.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                return res.send(err);
            }
            return res.json("deleted:(");
        });
    });

module.exports = router;
