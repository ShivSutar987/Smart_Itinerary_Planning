-- ==========================================
-- Database Schema for Avant-Garde Journeys
-- Database Name: travel_db
-- Compatibility: MySQL 5.7+ / 8.0+
-- ==========================================

-- 1. Create Database if it does not exist
CREATE DATABASE IF NOT EXISTS `travel_db`;
USE `travel_db`;

-- ==========================================
-- 2. Create Users Table
-- ==========================================
CREATE TABLE IF NOT EXISTS `users` (
    `user_id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- 3. Create Packages Table
-- ==========================================
CREATE TABLE IF NOT EXISTS `packages` (
    `package_id` INT AUTO_INCREMENT PRIMARY KEY,
    `package_name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `price` DECIMAL(10, 2) NOT NULL,
    `image_url` VARCHAR(500) DEFAULT NULL,
    `rating` DECIMAL(2, 1) DEFAULT 0.0,
    `location` VARCHAR(255) NOT NULL,
    `discount_price` DECIMAL(10, 2) DEFAULT NULL,
    `available_slots` INT DEFAULT 0,
    `package_status` VARCHAR(50) DEFAULT 'Active',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- 4. Create Bookings Table
-- ==========================================
CREATE TABLE IF NOT EXISTS `bookings` (
    `booking_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `place_name` VARCHAR(255) NOT NULL,
    `guests` INT NOT NULL,
    `arrival_date` DATE NOT NULL,
    `leaving_date` DATE NOT NULL,
    `booking_status` VARCHAR(50) DEFAULT 'Pending',
    `total_price` DECIMAL(10, 2) NOT NULL,
    `payment_status` VARCHAR(50) DEFAULT 'Pending',
    `booking_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_bookings_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- 5. Create Contacts Table
-- ==========================================
CREATE TABLE IF NOT EXISTS `contacts` (
    `contact_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `subject` VARCHAR(255) DEFAULT NULL,
    `message` TEXT NOT NULL,
    `submitted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_contacts_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- 6. Create Itineraries Table
-- ==========================================
CREATE TABLE IF NOT EXISTS `itineraries` (
    `itinerary_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `destination` VARCHAR(255) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `preferences` TEXT DEFAULT NULL, -- Stored as JSON string
    `generated_plan` TEXT DEFAULT NULL, -- Stored as JSON string
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_itineraries_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- 7. Create Reviews Table
-- ==========================================
CREATE TABLE IF NOT EXISTS `reviews` (
    `review_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `rating` INT NOT NULL CHECK (`rating` >= 1 AND `rating` <= 5),
    `review_text` TEXT NOT NULL,
    `review_status` VARCHAR(50) DEFAULT 'visible',
    `profile_image` VARCHAR(500) DEFAULT NULL,
    `review_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_reviews_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- 8. Create Activity Logs Table
-- ==========================================
CREATE TABLE IF NOT EXISTS `activity_logs` (
    `log_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT DEFAULT NULL,
    `activity_type` VARCHAR(100) NOT NULL,
    `page_name` VARCHAR(100) NOT NULL,
    `details` TEXT DEFAULT NULL,
    `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_activity_logs_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ==========================================
-- 9. Insert Sample Seed Data for Packages
-- ==========================================
INSERT INTO `packages` 
    (`package_name`, `description`, `price`, `image_url`, `rating`, `location`, `discount_price`, `available_slots`, `package_status`) 
VALUES
    (
        'Goa', 
        'Enjoy vibrant beaches, thrilling water sports, and lively nightlife across popular spots like Baga and Calangute.', 
        6999.00, 
        'Mini-Images/p_1.jpeg', 
        5.0, 
        'Goa', 
        10000.00, 
        10, 
        'Active'
    ),
    (
        'Manali', 
        'Explore snowy mountains, Solang Valley adventures, and scenic views around Rohtang Pass.', 
        7999.00, 
        'Mini-Images/p_2.jpeg', 
        5.0, 
        'Manali', 
        12000.00, 
        15, 
        'Active'
    ),
    (
        'Jaipur', 
        'Visit iconic spots like Hawa Mahal, Amber Fort, and vibrant local markets. Experience royal heritage.', 
        5999.00, 
        'Mini-Images/p_3.jpeg', 
        4.5, 
        'Jaipur', 
        10000.00, 
        20, 
        'Active'
    ),
    (
        'Andaman', 
        'Relax at Radhanagar Beach and explore Havelock Island with exciting water activities and tropical escapes.', 
        14999.00, 
        'Mini-Images/p_4.jpeg', 
        5.0, 
        'Andaman and Nicobar Islands', 
        18000.00, 
        8, 
        'Active'
    ),
    (
        'Munnar', 
        'Walk through lush tea plantations and enjoy cool weather with scenic viewpoints for an eco-friendly getaway.', 
        6499.00, 
        'Mini-Images/p_5.jpeg', 
        4.0, 
        'Munnar', 
        10000.00, 
        12, 
        'Active'
    ),
    (
        'Ladakh', 
        'Visit Pangong Lake, high-altitude monasteries, and enjoy thrilling road trips seeking rugged terrains.', 
        12999.00, 
        'Mini-Images/p_6.jpeg', 
        5.0, 
        'Ladakh', 
        17000.00, 
        5, 
        'Active'
    );
