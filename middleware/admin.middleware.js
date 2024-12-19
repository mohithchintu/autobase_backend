import jwt from "jsonwebtoken";

export const verifyadmin = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .send({ error: true, message: "Access denied. No token provided." });

  try {
    const admin_data = jwt.decode(token, process.env.JWT_ADMIN_SECRET);
    req.admin_id = admin_data._id;
    next();
  } catch {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .send({ error: true, message: "Token expired. Please log in again." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(403).send({ error: true, message: "Invalid token." });
    } else {
      return res
        .status(500)
        .send({ error: true, message: "An unexpected error occurred." });
    }
  }
};
