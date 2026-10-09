const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Pool } = require("pg");

console.log("=== Testing Render PostgreSQL Connection ===");

const rawUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
let config;

if (rawUrl) {
    console.log("Using DATABASE_URL connection string...");
    config = {
        connectionString: rawUrl,
        ssl: process.env.DB_SSL === "false" ? false : { rejectUnauthorized: false }
    };
} else {
    let host = process.env.DB_HOST || "dpg-db4l8dd9fdbs73fnibkg-a";
    if (process.env.RENDER !== "true" && host.startsWith("dpg-") && !host.includes(".")) {
        host = `${host}.oregon-postgres.render.com`;
    }
    const port = parseInt(process.env.DB_PORT || "5432", 10);
    const user = process.env.DB_USER || "planning_qwmh_user";
    const password = process.env.DB_PASSWORD || "";
    const database = process.env.DB_NAME || "planning_qwmh";
    const useSsl = process.env.DB_SSL === "false" ? false : { rejectUnauthorized: false };

    console.log(`Target Host: ${host}`);
    console.log(`Target Port: ${port}`);
    console.log(`Database:    ${database}`);
    console.log(`User:        ${user}`);
    console.log(`SSL:         ${useSsl ? "Enabled (rejectUnauthorized: false)" : "Disabled"}`);

    config = { host, port, user, password, database, ssl: useSsl, connectionTimeoutMillis: 7000 };
}

const pool = new Pool(config);

pool.query("SELECT NOW() as current_time, version()", (err, res) => {
    if (err) {
        console.error("\n❌ Connection Failed:", err.message);
        if (err.code === "ENOTFOUND") {
            console.error("-> Note: Render internal hostnames (like 'dpg-...') only resolve inside Render's cloud network.");
            console.error("-> For external / local machine testing, use the External Database URL: dpg-db4l8dd9fdbs73fnibkg-a.<region>-postgres.render.com");
        } else if (err.code === "28P01") {
            console.error("-> Password authentication failed. Please verify DB_PASSWORD in .env.");
        } else if (err.code === "3D000") {
            console.error("-> Database does not exist. Please verify DB_NAME in .env.");
        }
        pool.end();
        process.exit(1);
    } else {
        console.log("\n✅ Connection Successful!");
        console.log("Server Time:", res.rows[0].current_time);
        console.log("PostgreSQL Version:", res.rows[0].version);
        pool.end();
        process.exit(0);
    }
});
