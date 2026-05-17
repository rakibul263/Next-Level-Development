import app from "./app";
import { createTable } from "./db/database";

const main = () => {
  createTable();
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT} port`);
  });
};

main();
