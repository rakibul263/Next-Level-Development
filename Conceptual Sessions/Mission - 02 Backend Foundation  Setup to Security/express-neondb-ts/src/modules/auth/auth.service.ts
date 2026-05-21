import { neon } from "@neondatabase/serverless";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const sql = neon(config.database_url);
export const authLoginIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  const result = await sql`
        SELECT * FROM users
        WHERE email = ${payload.email}
    `;
  if (result.length === 0) {
    throw new Error("Invalid Credential");
  }
  const user = result[0]!;
  const mathPassword = await bcrypt.compare(
    payload.password,
    user.password_hash,
  );
  if (!mathPassword) {
    throw new Error("Password does not match.");
  }

  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: "24h",
  });

  return {
    accessToken,
  };
};
