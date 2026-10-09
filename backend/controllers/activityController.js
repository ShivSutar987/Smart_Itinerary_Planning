const db = require("../config/db");

const logActivity = (req, res) => {

    const {
        user_id,
        activity_type,
        page_name,
        details
    } = req.body || {};

    const query = `
        INSERT INTO activity_logs
        (user_id, activity_type, page_name, details)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [user_id, activity_type, page_name, details],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Activity Log Failed"
                });
            }

            res.status(201).json({
                success: true,
                message: "Activity Logged Successfully"
            });

        }
    );

};

module.exports = {
    logActivity
};