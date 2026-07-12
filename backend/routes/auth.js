const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.post("/login", (req, res) => {

    const { email, password } = req.body;


    // Temporary admin login
    if (
        email === "admin@transitops.com" &&
        password === "admin123"
    ) {


        const user = {

            id: "1",

            name: "Admin",

            role: "admin",

            email: email

        };


        const token = jwt.sign(

            user,

            process.env.JWT_SECRET,

            {
                expiresIn: "2h"
            }

        );


        return res.status(200).json({

            success: true,

            token: token,

            user: user

        });


    }


    return res.status(401).json({

        success:false,

        message:"Invalid Credentials"

    });


});


module.exports = router;