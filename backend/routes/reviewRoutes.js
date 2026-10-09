const express = require("express");

const router = express.Router();

const verifyToken =
require("../middleware/authMiddleware");

const {
    addReview,
    getAllReviews,
    deleteReview
} = require("../controllers/reviewController");

// Add Review
router.post(
    "/add",
    verifyToken,
    addReview
);

// Get All Reviews
router.get(
    "/all",
    getAllReviews
);

// Delete Reviews
router.delete(
    "/delete/:id",
    verifyToken,
    deleteReview
);

module.exports = router;