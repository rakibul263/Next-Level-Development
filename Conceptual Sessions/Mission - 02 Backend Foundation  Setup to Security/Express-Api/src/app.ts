import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import authRouter from "./api/routes/auth.Route";
import { globalErrorhandler } from "./middleware/globalErrorhandler";
import { logger } from "./middleware/logger";
const app: Application = express();

app.use(logger);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  throw Error("Server Error");
  res.send("Hello ");
});

app.use(authRouter);
app.use(globalErrorhandler);

export default app;
