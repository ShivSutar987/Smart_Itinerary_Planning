-- ============================================================
-- TRAVEL AGENCY DATABASE SCHEMA & SEED DATA (travel_db)
-- ============================================================

CREATE DATABASE IF NOT EXISTS travel_db;
USE travel_db;

-- 1. USERS TABLE
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
);

-- 2. BOOKINGS TABLE
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
    payment_status VARCHAR(50) DEFAULT 'paid',
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 3. CONTACTS TABLE
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
);

-- 4. ACTIVITY LOGS TABLE
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
);

-- 5. ITINERARIES TABLE
CREATE TABLE IF NOT EXISTS itineraries (
    itinerary_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    destination VARCHAR(255) NOT NULL,
    start_date DATE,
    end_date DATE,
    preferences TEXT,
    generated_plan TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. PACKAGES TABLE
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
);

-- 7. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    package_id INT,
    rating FLOAT NOT NULL,
    review_text TEXT NOT NULL,
    review_status VARCHAR(50) DEFAULT 'visible',
    review_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    profile_image VARCHAR(255) DEFAULT 'Mini-Images/pic1.png'
);

-- ============================================================
-- SAMPLE SEED DATA
-- ============================================================

-- Seed Demo User (password: password123)
INSERT IGNORE INTO users (user_id, name, email, password) VALUES 
(1, 'Demo User', 'demo@example.com', '$2b$10$wT8m9Ld2XmK3Zl9.P/1k.e5eY.Z/5q7zY8f/5q7zY8f/5q7zY8f');

-- Seed 6 Packages
INSERT IGNORE INTO packages (package_id, package_name, description, price, image_url, rating, location, discount_price, available_slots, package_status) VALUES
(1, 'Goa', 'Enjoy vibrant beaches, thrilling water sports, and lively nightlife across popular spots like Baga and Calangute.', 6999.00, 'Mini-Images/p_1.jpeg', 5.0, 'Goa', 10000.00, 15, 'Active'),
(2, 'Manali', 'Explore snowy mountains, Solang Valley adventures, and scenic views around Rohtang Pass.', 7999.00, 'Mini-Images/p_2.jpeg', 5.0, 'Manali', 12000.00, 10, 'Active'),
(3, 'Jaipur', 'Visit iconic spots like Hawa Mahal, Amber Fort, and vibrant local markets. Experience royal heritage.', 5999.00, 'Mini-Images/p_3.jpeg', 4.5, 'Jaipur', 10000.00, 20, 'Active'),
(4, 'Andaman', 'Relax at Radhanagar Beach and explore Havelock Island with exciting water activities and tropical escapes.', 14999.00, 'Mini-Images/p_4.jpeg', 5.0, 'Andaman and Nicobar Islands', 18000.00, 8, 'Active'),
(5, 'Munnar', 'Walk through lush tea plantations and enjoy cool weather with scenic viewpoints for an eco-friendly getaway.', 6499.00, 'Mini-Images/p_5.jpeg', 4.0, 'Munnar', 10000.00, 12, 'Active'),
(6, 'Ladakh', 'Visit Pangong Lake, high-altitude monasteries, and enjoy thrilling road trips seeking rugged terrains.', 12999.00, 'Mini-Images/p_6.jpeg', 5.0, 'Ladakh', 17000.00, 5, 'Active');

-- Seed Sample Reviews
INSERT IGNORE INTO reviews (review_id, user_id, package_id, rating, review_text, review_status, profile_image) VALUES
(1, 1, 1, 5.0, 'Loved the Goa trip! Sunset Mandovi River cruise was breathtaking and resort stay was super luxurious.', 'visible', 'Mini-Images/pic1.png'),
(2, 1, 2, 5.0, 'Solang valley snow sports in Manali were amazing. Warm wooden chalet resort made it top notch!', 'visible', 'Mini-Images/pic2.png'),
(3, 1, 3, 4.0, 'The Jaipur Heritage Haveli tour was so majestic. Amber Fort elephant ride and Chokhi Dhani dance were awesome.', 'visible', 'Mini-Images/pic3.png'),
(4, 1, 4, 5.0, 'Andaman Scuba diving and Havelock island beaches were spectacular! Crystal clear waters everywhere.', 'visible', 'Mini-Images/pic4.png');
