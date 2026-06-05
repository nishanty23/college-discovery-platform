import jwt from "jsonwebtoken";

const SECRET = "secretkey";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}