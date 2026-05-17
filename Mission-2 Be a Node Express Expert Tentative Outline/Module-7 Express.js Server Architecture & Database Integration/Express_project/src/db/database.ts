import dotenv from "dotenv";
import { Pool } from "pg";
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
                    password TEXT NOT NULL,
                    is_active BOOLEAN DEFAULT true,
                    age INT,
                    created_at TIMESTAMP DEFAULT NOW(),
                    updated_at TIMESTAMP DEFAULT NOW()
                )
            `);

    await dbConnection.query(`DROP TABLE IF EXISTS profiles CASCADE`);

    await dbConnection.query(`
          CREATE TABLE IF NOT EXISTS profiles(
            id SERIAL PRIMARY KEY,
            user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
            bio TEXT,
            address TEXT,
            phone VARCHAR(15),
            gender VARCHAR(10),
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
          )
        `);
  } catch (error) {
    console.log(error);
  }
};

createTable();
