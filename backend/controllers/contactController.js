const db = require("../config/db");

const createContact = (req, res) => {

    console.log("REQ USER:", req.user);

    const {
        name,
        email,
        subject,
        message
    } = req.body || {};

    const user_id = req.user.id;

    console.log("USER ID:", user_id);

    const query = `
        INSERT INTO contacts
        (
            user_id,
            name,
            email,
            subject,
            message
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            user_id,
            name,
            email,
            subject,
            message
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Message Send Failed"
                });

            }

            res.status(201).json({
                success: true,
                message: "Message Sent Successfully"
            });

        }
    );

};

module.exports = {
    createContact
};