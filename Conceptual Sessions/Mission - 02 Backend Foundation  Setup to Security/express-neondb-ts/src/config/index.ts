import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT as string,
  database_url: process.env.DATABASE_URL as string,
  jwt_secret: process.env.SECRET as string
};
