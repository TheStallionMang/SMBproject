var express = require('express');
var router = express.Router();

//api for all inventory items
router.route('/items')

    //create a new post
    .post(function(req,res) {

        //TODO create a new post in the database
        res.send({message:"TODO create a new item in the database"});
    })

    .get(function(req,res) {

        //TODO get all the posts in the database
        res.send({message:"TODO get all the items in the database"});
    })

//api for a specfic item
router.route('/items/:id')

    //create
    .put(function(req,res) {
        res.send({message:'TODO modify an existing item by using param ' + req.params.id});
    })

    .get(function(req,res) {
        res.send({message:'TODO get an existing item by using param ' + req.params.id});
    })

    .delete(function(req,res) {
        res.send({message:'TODO delete an existing item by using param ' + req.params.id})
    });

module.exports = router;