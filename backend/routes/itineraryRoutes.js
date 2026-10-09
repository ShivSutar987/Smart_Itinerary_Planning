const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const { generateItinerary, getMyItineraries } = require("../controllers/itineraryController");

// Protected routes (User must be logged in to generate/view plans)
router.post("/generate", verifyToken, generateItinerary);
router.get("/my-plans", verifyToken, getMyItineraries);

module.exports = router;
