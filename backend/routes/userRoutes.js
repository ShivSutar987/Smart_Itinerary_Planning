const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const { validateRegister } = require("../middleware/validationMiddleware");

const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    updateUserPassword
} = require("../controllers/userController");

// Register Route (with input validation)
router.post("/register", validateRegister, registerUser);

// Login Route
router.post("/login", loginUser);

// Authenticated User Profile Routes
router.get("/profile", verifyToken, getUserProfile);
router.put("/profile", verifyToken, updateUserProfile);
router.put("/change-password", verifyToken, updateUserPassword);

module.exports = router;