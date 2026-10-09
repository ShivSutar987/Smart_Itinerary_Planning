const db = require("../config/db");

const createBooking = (req, res) => {

    const {
        place_name,
        guests,
        arrival_date,
        leaving_date,
        booking_status,
        total_price,
        payment_status
    } = req.body || {};

    const user_id = req.user.id;

    const query = `
        INSERT INTO bookings
        (
            user_id,
            place_name,
            guests,
            arrival_date,
            leaving_date,
            booking_status,
            total_price,
            payment_status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const arrDate = arrival_date ? arrival_date : null;
    const leaveDate = leaving_date ? leaving_date : null;

    db.query(
        query,
        [
            user_id,
            place_name,
            guests,
            arrDate,
            leaveDate,
            booking_status,
            total_price,
            payment_status
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Booking Failed"
                });
            }

            res.status(201).json({
                success: true,
                message: "Booking Created Successfully"
            });

        }
    );

};

const getUserBookings = (req, res) => {

    const user_id = req.user.id;

    const query = `
        SELECT * FROM bookings
        WHERE user_id = ?
        ORDER BY booking_time DESC
    `;

    db.query(query, [user_id], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Failed To Fetch Bookings"
            });
        }

        res.status(200).json({
            success: true,
            bookings: result
        });

    });

};

const deleteBooking = (req, res) => {

    const booking_id = req.params.id;

    const user_id = req.user.id;

    const query = `
        DELETE FROM bookings
        WHERE booking_id = ? AND user_id = ?
    `;

    db.query(
        query,
        [booking_id, user_id],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Delete Failed"
                });
            }

            if (result.affectedRows === 0) {

                return res.status(404).json({
                    success: false,
                    message: "Booking Not Found"
                });
            }

            res.status(200).json({
                success: true,
                message: "Booking Deleted Successfully"
            });

        }
    );

};

const updateBooking = (req, res) => {

    const booking_id = req.params.id;

    const user_id = req.user.id;

    const {
        place_name,
        guests,
        arrival_date,
        leaving_date,
        booking_status,
        total_price,
        payment_status
    } = req.body || {};

    const query = `
        UPDATE bookings
        SET
            place_name = ?,
            guests = ?,
            arrival_date = ?,
            leaving_date = ?,
            booking_status = ?,
            total_price = ?,
            payment_status = ?
        WHERE booking_id = ? AND user_id = ?
    `;

    const arrDate = arrival_date ? arrival_date : null;
    const leaveDate = leaving_date ? leaving_date : null;

    db.query(
        query,
        [
            place_name,
            guests,
            arrDate,
            leaveDate,
            booking_status,
            total_price,
            payment_status,
            booking_id,
            user_id
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Update Failed"
                });
            }

            if (result.affectedRows === 0) {

                return res.status(404).json({
                    success: false,
                    message: "Booking Not Found"
                });
            }

            res.status(200).json({
                success: true,
                message: "Booking Updated Successfully"
            });

        }
    );

};

module.exports = {
    createBooking,
    getUserBookings,
    deleteBooking,
    updateBooking
};