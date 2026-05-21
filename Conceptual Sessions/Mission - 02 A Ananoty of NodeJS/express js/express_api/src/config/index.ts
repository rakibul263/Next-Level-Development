import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT as string,
  database: process.env.DATABASE_URL as string
};

export default config;
