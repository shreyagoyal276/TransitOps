const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");


// Dashboard API

router.get("/", auth, (req,res)=>{


    res.json({

        message:"Dashboard Data",

        user:{
            id:req.user.id,
            name:req.user.name,
            role:req.user.role
        },


        modules:[

            {
                name:"Vehicles",
                icon:"bi-truck-front",
                description:"Manage fleet vehicles",
                link:"/vehicles"
            },


            {
                name:"Drivers",
                icon:"bi-person-badge",
                description:"Manage driver details",
                link:"/drivers"
            },


            {
                name:"Trips",
                icon:"bi-map",
                description:"Track ongoing trips",
                link:"/trips"
            },


            {
                name:"Maintenance",
                icon:"bi-tools",
                description:"Vehicle maintenance records",
                link:"/maintenance"
            },


            {
                name:"Fuel",
                icon:"bi-fuel-pump",
                description:"Fuel consumption tracking",
                link:"/fuel"
            },


            {
                name:"Expenses",
                icon:"bi-cash-stack",
                description:"Manage operational expenses",
                link:"/expenses"
            }


        ]


    });



});


module.exports = router;