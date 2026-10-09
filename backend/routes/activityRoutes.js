const express = require("express");

const router = express.Router();

const {
    logActivity
} = require("../controllers/activityController");

router.post("/log", logActivity);

module.exports = router;