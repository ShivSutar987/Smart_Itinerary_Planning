const express = require("express");

const router = express.Router();

const verifyToken =
require("../middleware/authMiddleware");

const {
    createContact
} = require("../controllers/contactController");

router.post(
    "/send",
    verifyToken,
    createContact
);

module.exports = router;