import express from "express";
import { auth } from "./middlewares/auth";
import { logger } from "./middlewares/logger";
import authRouter from "./modules/auth/auth.route";
import profileRouter from "./modules/profile/profile.route";
import userRouter from "./modules/user/user.route";
const app = express();
app.use(express.json());

// logger added
app.use(logger);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/profile", auth, profileRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
