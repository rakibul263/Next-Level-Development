import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { createTable, dbConnection } from "./db/database";
import { userRoute } from "./db/modules/users/users.route";
const app: Application = express();

// middleware
app.use(express.json());
app.use('/users', userRoute);

// create table function call
createTable();

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Express Project.", author: "Rakibul Hasan" });
});




export default app;