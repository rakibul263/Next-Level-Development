import express from "express";
import userRouter from "./modules/user/user.route";
import profileRouter from "./modules/profile/profile.route";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
