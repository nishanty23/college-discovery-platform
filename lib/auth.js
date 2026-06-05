import jwt from "jsonwebtoken";

const SECRET = "secretkey";

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}