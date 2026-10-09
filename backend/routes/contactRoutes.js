const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    createContact,
    getUserContacts
} = require("../controllers/contactController");

// Send contact message
router.post(
    "/send",
    verifyToken,
    createContact
);

// Get messages sent by authenticated user
router.get(
    "/my-messages",
    verifyToken,
    getUserContacts
);

module.exports = router;