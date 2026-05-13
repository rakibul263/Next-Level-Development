import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
const port = 3000;
// middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_CnY92KwsAJVW@ep-still-tree-ap31r31i-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDB = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
          id SERIAL PRIMARY KEY,
          name VARCHAR(50),
          email VARCHAR(50) NOT NULL UNIQUE,
          password VARCHAR(50) NOT NULL,
          is_active BOOLEAN DEFAULT true,
          age INT,
          created_at TIMESTAMP DEFAULT NOW(),
          "update" TIMESTAMP DEFAULT NOW()
          )
      `);
    console.log("Database Create Successfully");
  } catch (error) {
    console.log(error);
  }
};
initDB();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Express Server",
    author: "Md Rakibul Hasan",
  });
});

app.post("/", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;
  try {
    const result = await pool.query(
      `
        INSERT INTO users(name, email, password, age)
        VALUES($1, $2, $3, $4)
        RETURNING *;
      `,
      [name, email, password, age],
    );
    res.status(201).json({
      message: "created user successfully.",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});

app.listen(port, async () => {
  console.log(`App listening on port ${port}`);
});
