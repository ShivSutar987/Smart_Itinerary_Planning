const db = require("../config/db");

// Generate a mock AI itinerary (since we don't have a real OpenAI key in this setup)
// In a production app, you would call OpenAI here and return the result.
exports.generateItinerary = async (req, res) => {
    try {
        const { destination, start_date, end_date, guests } = req.body || {};
        const user_id = req.user?.id; // from authMiddleware

        if (!destination || !start_date || !end_date) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Mock AI Generation Logic
        const generated_plan = {
            title: `AI Trip to ${destination}`,
            days: [
                { day: 1, activity: `Arrival in ${destination} & Check-in. Evening city walk.` },
                { day: 2, activity: "Guided smart-tour of top historical landmarks." },
                { day: 3, activity: "AI-optimized culinary experience and departure." }
            ]
        };

        const preferences = JSON.stringify({ guests });
        const plan_json = JSON.stringify(generated_plan);

        const sDate = start_date ? start_date : null;
        const eDate = end_date ? end_date : null;

        // Save to Database
        db.query(
            "INSERT INTO itineraries (user_id, destination, start_date, end_date, preferences, generated_plan) VALUES (?, ?, ?, ?, ?, ?)",
            [user_id, destination, sDate, eDate, preferences, plan_json],
            (err, result) => {
                if (err) {
                    console.error("Database Error:", err);
                    return res.status(500).json({ success: false, message: "Failed to save AI itinerary." });
                }
                
                res.status(201).json({
                    success: true,
                    message: "AI Itinerary generated successfully!",
                    itinerary_id: result.insertId,
                    plan: generated_plan
                });
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get user's saved itineraries
exports.getMyItineraries = async (req, res) => {
    try {
        const user_id = req.user?.id;

        db.query(
            "SELECT * FROM itineraries WHERE user_id = ? ORDER BY created_at DESC",
            [user_id],
            (err, results) => {
                if (err) {
                    console.error("Database Error:", err);
                    return res.status(500).json({ success: false, message: "Database Error" });
                }
                res.status(200).json({ success: true, itineraries: results });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
