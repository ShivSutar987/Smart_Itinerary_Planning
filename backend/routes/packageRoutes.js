const express = require("express");

const router = express.Router();

const {
    addPackage,
    getPackages,
    getSinglePackage,
    deletePackage
} = require("../controllers/packageController");

// Add Package
router.post("/add", addPackage);

// Get All Packages
router.get("/all", getPackages);

// Get Single Package
router.get("/:id", getSinglePackage);

// Delete Package
router.delete("/delete/:id", deletePackage);

module.exports = router;