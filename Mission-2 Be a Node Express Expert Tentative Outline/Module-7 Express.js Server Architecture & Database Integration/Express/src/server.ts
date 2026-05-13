import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();
const port = 3000;
// middleware
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Express Server",
    author: "Md Rakibul Hasan",
  });
});

app.post("/", async (req: Request, res: Response) => {
    console.log(req.body);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
