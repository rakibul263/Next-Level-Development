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

app.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  res.status(201).json({ message: "Created", data: name, email });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
