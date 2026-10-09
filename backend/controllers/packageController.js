const db = require("../config/db");

// Add Package
const addPackage = (req, res) => {

    const {
        package_name,
        description,
        price,
        image_url,
        rating,
        location,
        discount_price,
        available_slots,
        package_status
    } = req.body || {};

    const query = `
        INSERT INTO packages
        (
            package_name,
            description,
            price,
            image_url,
            rating,
            location,
            discount_price,
            available_slots,
            package_status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            package_name,
            description,
            price,
            image_url,
            rating,
            location,
            discount_price,
            available_slots,
            package_status
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Package Add Failed"
                });
            }

            res.status(201).json({
                success: true,
                message: "Package Added Successfully"
            });

        }
    );

};

// Get All Packages
const getPackages = (req, res) => {

    const query = `
        SELECT * FROM packages
        ORDER BY package_id DESC
    `;

    db.query(query, (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Failed To Fetch Packages"
            });
        }

        res.status(200).json({
            success: true,
            packages: result
        });

    });

};

// Get Single Package
const getSinglePackage = (req, res) => {

    const package_id = req.params.id;

    const query = `
        SELECT * FROM packages
        WHERE package_id = ?
    `;

    db.query(query, [package_id], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Failed To Fetch Package"
            });
        }

        res.status(200).json({
            success: true,
            package: result[0]
        });

    });

};

const deletePackage = (req, res) => {

    const package_id = req.params.id;

    const query = `
        DELETE FROM packages
        WHERE package_id = ?
    `;

    db.query(query, [package_id], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Delete Package Failed"
            });
        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                success: false,
                message: "Package Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Package Deleted Successfully"
        });

    });

};

module.exports = {
    addPackage,
    getPackages,
    getSinglePackage,
    deletePackage
};