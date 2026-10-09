require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const verifyToken = require("./middleware/authMiddleware");

const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");

// ✅ ADDED BOOKING ROUTES
const bookingRoutes = require("./routes/bookingRoutes");

// ✅ ADDED CONTACT ROUTES
const contactRoutes = require("./routes/contactRoutes");

// ✅ ADDED PACKAGES ROUTES
const packageRoutes = require("./routes/packageRoutes");

// ✅ ADDED REVIEW ROUTES
const reviewRoutes = require("./routes/reviewRoutes");

// ✅ ADDED ITINERARY ROUTES
const itineraryRoutes = require("./routes/itineraryRoutes");

const app = express();

const path = require("path");

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Main Routes
app.use("/api/users", userRoutes);
app.use("/api/activity", activityRoutes);

// ✅ ADDED BOOKING ROUTE
app.use("/api/bookings", bookingRoutes);

// ✅ ADDED CONTACT ROUTE
app.use("/api/contact", contactRoutes);

// ✅ ADDED PACKAGES ROUTE
app.use("/api/packages", packageRoutes);

// ✅ ADDED REVIEW ROUTE
app.use("/api/reviews", reviewRoutes);

// ✅ ADDED ITINERARY ROUTE
app.use("/api/itinerary", itineraryRoutes);

// Home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/Mini_HTML.html"));
});

// Test GET Route
app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "GET Route Working"
    });
});

// Test POST Route
app.post("/test", (req, res) => {
    res.json({
        success: true,
        message: "POST Route Working"
    });
});

// Protected Route
app.get("/protected", verifyToken, (req, res) => {

    res.json({
        success: true,
        message: "Protected Route Accessed Successfully",
        user: req.user
    });

});

// Invalid Route Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});