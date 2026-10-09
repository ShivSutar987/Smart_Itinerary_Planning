const mysql = require("mysql2");

const dbConfig = process.env.DATABASE_URL || process.env.MYSQL_URL
    ? {
        uri: process.env.DATABASE_URL || process.env.MYSQL_URL,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined
    }
    : {
        host: process.env.DB_HOST || "srv-db4k6inf3r2c739qvp1g",
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "Mysql@123",
        database: process.env.DB_NAME || "travel_db",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined
    };

const pool = mysql.createPool(dbConfig);

// Test connection and initialize tables
pool.getConnection((err, conn) => {
    if (err) {
        console.error("Database Connection Failed:", err.message);
    } else {
        console.log("MySQL Connected Successfully (Pool Initialized)");
        conn.release();
        initializeTables();
    }
});

function initializeTables() {
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            profile_image VARCHAR(255) DEFAULT 'Mini-Images/pic1.png',
            phone VARCHAR(50) DEFAULT '+91 98765 43210',
            role VARCHAR(50) DEFAULT 'user',
            last_login TIMESTAMP NULL,
            status VARCHAR(50) DEFAULT 'active'
        )
    `;

    const createBookingsTable = `
        CREATE TABLE IF NOT EXISTS bookings (
            booking_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            place_name VARCHAR(255) NOT NULL,
            guests INT DEFAULT 1,
            arrival_date DATE,
            leaving_date DATE,
            booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            booking_status VARCHAR(50) DEFAULT 'confirmed',
            total_price DECIMAL(10,2) DEFAULT 0.00,
            payment_status VARCHAR(50) DEFAULT 'paid'
        )
    `;

    const createContactsTable = `
        CREATE TABLE IF NOT EXISTS contacts (
            contact_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            name VARCHAR(255),
            email VARCHAR(255),
            subject VARCHAR(255),
            message TEXT,
            contact_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            reply_status VARCHAR(50) DEFAULT 'pending',
            admin_reply TEXT
        )
    `;

    const createActivityLogsTable = `
        CREATE TABLE IF NOT EXISTS activity_logs (
            log_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            activity_type VARCHAR(100),
            page_name VARCHAR(100),
            details TEXT,
            activity_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            ip_address VARCHAR(45),
            device_info VARCHAR(255),
            activity_status VARCHAR(50)
        )
    `;

    const createItinerariesTable = `
        CREATE TABLE IF NOT EXISTS itineraries (
            itinerary_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            destination VARCHAR(255) NOT NULL,
            start_date DATE,
            end_date DATE,
            preferences TEXT,
            generated_plan TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    const createPackagesTable = `
        CREATE TABLE IF NOT EXISTS packages (
            package_id INT AUTO_INCREMENT PRIMARY KEY,
            package_name VARCHAR(255) NOT NULL,
            description TEXT,
            price DECIMAL(10,2) NOT NULL,
            image_url VARCHAR(255),
            rating FLOAT DEFAULT 5.0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            location VARCHAR(255),
            discount_price DECIMAL(10,2),
            available_slots INT DEFAULT 10,
            package_status VARCHAR(50) DEFAULT 'Active'
        )
    `;

    const createReviewsTable = `
        CREATE TABLE IF NOT EXISTS reviews (
            review_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            package_id INT,
            rating FLOAT NOT NULL,
            review_text TEXT NOT NULL,
            review_status VARCHAR(50) DEFAULT 'visible',
            review_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            profile_image VARCHAR(255) DEFAULT 'Mini-Images/pic1.png'
        )
    `;

    pool.query(createUsersTable, (err) => { if (err) console.error("Error creating users table:", err.message); });
    pool.query(createBookingsTable, (err) => { if (err) console.error("Error creating bookings table:", err.message); });
    pool.query(createContactsTable, (err) => { if (err) console.error("Error creating contacts table:", err.message); });
    pool.query(createActivityLogsTable, (err) => { if (err) console.error("Error creating activity_logs table:", err.message); });
    pool.query(createItinerariesTable, (err) => { if (err) console.error("Error creating itineraries table:", err.message); });
    pool.query(createPackagesTable, (err) => { if (err) console.error("Error creating packages table:", err.message); });
    pool.query(createReviewsTable, (err) => {
        if (err) console.error("Error creating reviews table:", err.message);
        else seedSampleData();
    });
}

function seedSampleData() {
    pool.query("SELECT COUNT(*) as count FROM reviews", (err, res) => {
        if (!err && res[0] && res[0].count === 0) {
            const sampleReviews = [
                [1, 1, 5, "Loved the Goa trip! Sunset Mandovi River cruise was breathtaking and resort stay was super luxurious.", "visible", "Mini-Images/pic1.png"],
                [1, 2, 5, "Solang valley snow sports in Manali were amazing. Warm wooden chalet resort made it top notch!", "visible", "Mini-Images/pic2.png"],
                [1, 3, 4, "The Jaipur Heritage Haveli tour was so majestic. Amber Fort elephant ride and Chokhi Dhani dance were awesome.", "visible", "Mini-Images/pic3.png"],
                [1, 4, 5, "Andaman Scuba diving and Havelock island beaches were spectacular! Crystal clear waters everywhere.", "visible", "Mini-Images/pic4.png"]
            ];
            pool.query(
                "INSERT INTO reviews (user_id, package_id, rating, review_text, review_status, profile_image) VALUES ?",
                [sampleReviews],
                (seedErr) => {
                    if (!seedErr) console.log("Sample reviews seeded into database successfully.");
                }
            );
        }
    });

    pool.query("SELECT COUNT(*) as count FROM users", async (err, res) => {
        if (!err && res[0] && res[0].count === 0) {
            const bcrypt = require("bcrypt");
            const hash = await bcrypt.hash("password123", 10);
            pool.query(
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                ["Demo User", "demo@example.com", hash],
                (userErr) => {
                    if (!userErr) console.log("Demo user (demo@example.com / password123) seeded into database.");
                }
            );
        }
    });
}

module.exports = pool;