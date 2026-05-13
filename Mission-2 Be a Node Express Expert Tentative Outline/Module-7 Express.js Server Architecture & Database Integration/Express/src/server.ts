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

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Express Server",
    author: "Md Rakibul Hasan",
  });
});

app.post("/", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.status(201).json({
    message: "created post",
    data: name,
    email,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
