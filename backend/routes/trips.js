const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {

    res.json({

        message: "Trip List",

        trips: []

    });

});

module.exports = router;