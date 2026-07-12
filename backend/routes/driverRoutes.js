const express = require("express");

const router = express.Router();

const Driver = require("../models/Driver");



// GET ALL DRIVERS

router.get("/", async(req,res)=>{

    try{

        const drivers = await Driver.find();

        res.json(drivers);

    }

    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});




// ADD DRIVER

router.post("/", async(req,res)=>{


    try{


        const driver = new Driver({

            name:req.body.name,

            license:req.body.license,

            phone:req.body.phone,

            status:req.body.status

        });



        const savedDriver = await driver.save();



        res.status(201).json(savedDriver);



    }

    catch(err){

        res.status(500).json({
            message:err.message
        });

    }


});





module.exports = router;