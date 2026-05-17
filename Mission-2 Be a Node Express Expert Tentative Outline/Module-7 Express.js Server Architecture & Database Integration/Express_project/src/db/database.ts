import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

// database connection
export const dbConnection = new Pool({
  connectionString: process.env.DB_URL,
});

// create table automatically
export const createTable = async () => {
  try {
    await dbConnection.query(`
                CREATE TABLE IF NOT EXISTS users(
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(50),
                    email VARCHAR(50) NOT NULL,
                    password VARCHAR(50) NOT NULL,
                    is_active BOOLEAN DEFAULT true,
                    age INT,
                    created_at TIMESTAMP DEFAULT NOW(),
                    updated_at TIMESTAMP DEFAULT NOW()
                )
            `);
  } catch (error) {
    console.log(error);
  }
};

createTable();
