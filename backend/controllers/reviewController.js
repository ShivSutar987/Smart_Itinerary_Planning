const db = require("../config/db");

// Add Review
const addReview = (req, res) => {

    const {
        rating,
        review_text
    } = req.body || {};

    const user_id = req.user.id;

    const query = `
        INSERT INTO reviews
        (
            user_id,
            rating,
            review_text,
            review_status
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            user_id,
            rating,
            review_text,
            "visible"
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Review Add Failed"
                });

            }

            res.status(201).json({
                success: true,
                message: "Review Added Successfully"
            });

        }
    );

};

// Get All Reviews
const getAllReviews = (req, res) => {

   const query = `
SELECT
    reviews.review_id,
    reviews.user_id,
    reviews.rating,
    reviews.review_text,
    reviews.review_time,
    reviews.profile_image,
    COALESCE(users.name, 'Traveler') AS name
FROM reviews
LEFT JOIN users
ON reviews.user_id = users.user_id
ORDER BY reviews.review_time DESC
`;
    db.query(query, (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Failed To Fetch Reviews"
            });

        }

        res.status(200).json({
            success: true,
            reviews: result
        });

    });

};

const deleteReview = (req, res) => {

    const review_id = req.params.id;

    const user_id = req.user.id;

    const query = `
        DELETE FROM reviews
        WHERE review_id = ?
        AND user_id = ?
    `;

    db.query(
        query,
        [review_id, user_id],
        (err, result) => {

            if(err){

                return res.status(500).json({
                    success:false,
                    message:"Delete Failed"
                });

            }

            if(result.affectedRows === 0){

                return res.status(404).json({
                    success:false,
                    message:"Review Not Found"
                });

            }

            res.json({
                success:true,
                message:"Review Deleted Successfully"
            });

        }
    );

};

module.exports = {
    addReview,
    getAllReviews,
    deleteReview
};