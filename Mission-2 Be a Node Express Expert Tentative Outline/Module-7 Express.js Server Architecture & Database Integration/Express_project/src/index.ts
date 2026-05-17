import dotenv from "dotenv";
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
const PORT = 3000;

// middleware
app.use(express.json());
dotenv.config();
// db connection
const dbConnection = new Pool({
  connectionString: process.env.DB_URL,
});

// create table automatically
const createTable = async () => {
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

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Express Project.", author: "Rakibul Hasan" });
});

// post method
app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;
    // data insert on database
    const insertData = await dbConnection.query(
      `
            INSERT INTO users(name, email, password, age)
            VALUES($1, $2, $3, $4)
            RETURNING *
        `,
      [name, email, password, age],
    );
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: insertData.rows[0],
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to create user", error });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
