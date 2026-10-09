const jwt = require("jsonwebtoken");

console.log("USER CONTROLLER LOADED");

const db = require("../config/db");
const bcrypt = require("bcrypt");

const loginUser = (req, res) => {

    const { email, password } = req.body || {};

    // Check User
    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        // User Not Found
        if (result.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email"
            });
        }

        const user = result[0];

        // Compare Password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user.user_id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
        success: true,
        message: "Login Successful",
        token,
        user_id: user.user_id,
        name: user.name
        });

    });

};

// Register User Controller
const registerUser = async (req, res) => {

    try {

        console.log("BODY DATA:", req.body);

        const { name, email, password } = req.body || {};

        // Check Empty Fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check Existing User
        const checkUserQuery = "SELECT * FROM users WHERE email = ?";

        db.query(checkUserQuery, [email], async (err, result) => {

            if (err) {

                console.log("CHECK USER ERROR:", err);

                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });
            }

            // User Already Exists
            if (result.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: "User already exists"
                });
            }

            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);

            console.log("HASHED PASSWORD:", hashedPassword);

            // Insert User
            const insertQuery = `
                INSERT INTO users (name, email, password)
                VALUES (?, ?, ?)
            `;

            db.query(
                insertQuery,
                [name, email, hashedPassword],
                (err, result) => {

                    if (err) {

                        console.log("INSERT ERROR:", err);

                        return res.status(500).json({
                            success: false,
                            message: "Registration Failed",
                            error: err.message
                        });
                    }

                    console.log("USER INSERTED:", result);

                    return res.status(201).json({
                        success: true,
                        message: "User Registered Successfully"
                    });

                }
            );

        });

    } catch (error) {

        console.log("SERVER ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};

// Get User Profile
const getUserProfile = (req, res) => {
    const userId = req.user.id;

    const query = "SELECT user_id, name, email, phone, profile_image, role FROM users WHERE user_id = ?";
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error("Fetch Profile Error:", err);
            return res.status(500).json({ success: false, message: "Database Error" });
        }
        if (result.length === 0) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }
        res.status(200).json({
            success: true,
            user: result[0]
        });
    });
};

// Update User Profile
const updateUserProfile = (req, res) => {
    const userId = req.user.id;
    const { name, phone } = req.body || {};

    if (!name || name.trim() === "") {
        return res.status(400).json({ success: false, message: "Name is required" });
    }

    const query = "UPDATE users SET name = ?, phone = COALESCE(?, phone) WHERE user_id = ?";
    db.query(query, [name.trim(), phone || null, userId], (err, result) => {
        if (err) {
            console.error("Update Profile Error:", err);
            return res.status(500).json({ success: false, message: "Database Error" });
        }

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            user: { name: name.trim(), phone }
        });
    });
};

// Change / Update Password
const updateUserPassword = async (req, res) => {
    const userId = req.user.id;
    const { password } = req.body || {};

    if (!password || password.length < 6) {
        return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "UPDATE users SET password = ? WHERE user_id = ?";
        db.query(query, [hashedPassword, userId], (err, result) => {
            if (err) {
                console.error("Password Update Error:", err);
                return res.status(500).json({ success: false, message: "Database Error" });
            }
            res.status(200).json({
                success: true,
                message: "Password Updated Successfully"
            });
        });
    } catch (error) {
        console.error("Password Hash Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    updateUserPassword
};