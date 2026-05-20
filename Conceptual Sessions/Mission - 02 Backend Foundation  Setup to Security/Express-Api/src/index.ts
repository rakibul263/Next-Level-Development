import app from "./app";
import config from "./config";
import { initDB } from "./db";

const main = async () => {
  initDB();
  app.listen(config.PORT, () => {
    console.log(`server is running at ${config.PORT} port`);
  });
};

main();
