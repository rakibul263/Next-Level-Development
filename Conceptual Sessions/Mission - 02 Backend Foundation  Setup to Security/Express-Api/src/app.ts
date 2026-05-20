import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { globalErrorhandler } from "./middleware/globalErrorhandler";
import { logger } from "./middleware/logger";
const app: Application = express();

app.use(logger);

app.get("/", (req: Request, res: Response) => {
  throw Error("Server Error");
  res.send("Hello ");
});

app.use(globalErrorhandler);

export default app;
