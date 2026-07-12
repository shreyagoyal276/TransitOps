const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {

    res.json({

        success: true,

        user: req.user,

        modules: [

            {

                name: "Vehicles",

                description: "Manage Fleet",

                link: "/dashboard/vehicles"

            },

            {

                name: "Drivers",

                description: "Manage Drivers",

                link: "/dashboard/drivers"

            },

            {

                name: "Trips",

                description: "Manage Trips",

                link: "/dashboard/trips"

            },

            {

                name: "Maintenance",

                description: "Maintenance Records",

                link: "/dashboard/maintenance"

            },

            {

                name: "Fuel",

                description: "Fuel Expenses",

                link: "/dashboard/fuel"

            }

        ]

    });

});

module.exports = router;