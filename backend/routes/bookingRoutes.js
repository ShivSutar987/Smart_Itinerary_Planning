const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    createBooking,
    getUserBookings,
    deleteBooking,
    updateBooking
} = require("../controllers/bookingController");

// Create Booking
router.post("/create", verifyToken, createBooking);

// Get User Bookings
router.get("/my-bookings", verifyToken, getUserBookings);

// Delete Booking
router.delete("/delete/:id", verifyToken, deleteBooking);

// Update Booking
router.put("/update/:id", verifyToken, updateBooking);

module.exports = router;