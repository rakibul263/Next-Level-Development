import express from "express";
import userRouter from "./modules/user/user.route";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
