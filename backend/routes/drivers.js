const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {

    res.json({

        message: "Driver List",

        drivers: []

    });

});

module.exports = router;