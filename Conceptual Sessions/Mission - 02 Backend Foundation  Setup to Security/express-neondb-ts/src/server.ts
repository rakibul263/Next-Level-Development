import app from "./app";
import config from "./config";
import initDB from "./db/initDB";

app.listen(config.port, async () => {
  await initDB();
  console.log(`server is running at ${config.port}`);
});
