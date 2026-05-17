import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { createTable } from "./db/database";
import { userRoute } from "./modules/users/users.route";
import { profileRoute } from "./modules/profiles/profile.router";
const app: Application = express();

// middleware
app.use(express.json());
app.use("/users", userRoute);
app.use("/profile", profileRoute);

// create table function call
createTable();

export default app;
