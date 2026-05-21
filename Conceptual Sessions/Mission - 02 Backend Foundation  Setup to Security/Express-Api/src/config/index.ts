import dotenv from "dotenv";
import { access } from "node:fs";
dotenv.config({ quiet: true });

const config = {
  PORT: process.env.PORT as string,
  database_url: process.env.DATABASE_URL as string,
  node_env: process.env.NODE_ENV as string,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET as string,
};
export default config;
