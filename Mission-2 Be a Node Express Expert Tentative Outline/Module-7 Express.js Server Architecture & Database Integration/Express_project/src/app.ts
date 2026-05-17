import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { createTable, dbConnection } from "./db/database";
const app: Application = express();

// middleware
app.use(express.json());

// create table function call
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

// get method
app.get("/users", async (req: Request, res: Response) => {
  try {
    const getData = await dbConnection.query(
      `
        SELECT * FROM users
        ORDER BY id ASC
        `,
    );
    res.status(200).json({
      success: true,
      data: getData.rows,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to create user", error });
  }
});

// get user by id
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getUserById = await dbConnection.query(
      `
            SELECT * FROM users
            WHERE id = $1
        `,
      [id],
    );
    if (getUserById.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data Found Successfully.",
      data: getUserById.rows[0],
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Data not found.",
    });
  }
});

// update user
app.put("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    const updateUserUsingId = await dbConnection.query(
      `
            UPDATE users
            SET 
                name = COALESCE($1, name),
                email = COALESCE($2, email),
                password = COALESCE($3, password),
                age = COALESCE($4, age),
                updated_at = NOW()
            WHERE id = $5
            RETURNING *
        `,
      [name, email, password, age, id],
    );
    res.status(201).json({
      success: true,
      message: "Data update successfully.",
      data: updateUserUsingId.rows[0],
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Data cannot update successfully. Please check",
    });
  }
});

// delete user
app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await dbConnection.query(
      `
            DELETE FROM users
            WHERE id = $1
        `,
      [id],
    );
    res.status(200).json({
      success: true,
      message: `No =${id} id : user delete successfully.`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something want wrong. Data not deleted.",
      error: error,
    });
  }
});

export default app;