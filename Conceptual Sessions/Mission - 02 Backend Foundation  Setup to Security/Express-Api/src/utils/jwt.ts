import jwt from "jsonwebtoken";
import config from "../config";
import type { RUser } from "../types";

export const signToken = (payload: RUser & { id: number }) => {
  // access token create -> data access
  const accessToken = jwt.sign(payload, config.access_token_secret, {
    expiresIn: "12h",
  });
  // refresh token create -> token refresh
  const refreshToken = jwt.sign(payload, config.refresh_token_secret, {
    expiresIn: "7d",
  });
  // return token to controller
  return { accessToken, refreshToken };
};
