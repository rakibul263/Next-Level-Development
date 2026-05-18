import express, { type Application } from "express";
import { createTable } from "./db/database";
import { authRoute } from "./modules/auth/auth.route";
import { profileRoute } from "./modules/profiles/profile.router";
import { userRoute } from "./modules/users/users.route";
const app: Application = express();

// middleware
app.use(express.json());
app.use("/users", userRoute);
app.use("/profile", profileRoute);
app.use("/auth", authRoute);

// create table function call
createTable();

export default app;
