import { neon } from "@neondatabase/serverless";
import config from "../config";

const initDB = async () => {
  const sql = neon(config.database_url);
  try {
    await sql`
            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                password_hash VARCHAR(100) NOT NULL,
                age INT NOT NULL,
                role TEXT NOT NULL DEFAULT 'user',
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `;
    console.log("Database Created Successfully.");
  } catch (error) {
    console.log("Cannot create database.");
  }
};
export default initDB;
