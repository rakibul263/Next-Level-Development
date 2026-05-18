import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { dbConnection } from "../../db/database";

const loginUserIntoDb = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;
  // check if the user exist
  //   compare the password

  const userData = await dbConnection.query(
    `
        SELECT * FROM users
        WHERE email = $1
    `,
    [email],
  );
  if (userData.rows.length === 0) {
    throw new Error("User not found.");
  }
  const user = userData.rows[0];
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    throw new Error("User not found.");
  }
  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    is_active: user.is_active,
  };
  //   generate token
  const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
  return { accessToken };
};

export const authService = {
  loginUserIntoDb,
};
