import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createJwt = (payload) => {
  const key = process.env.JWT_SECRET;
  let token = null;

  try {
    token = jwt.sign(payload, key, { expiresIn: process.env.JWT_EXPIRES_IN });
  } catch (error) {
    console.error("❌ Error creating JWT:", error);
  }

  return token;
};

const verifyToken = (token) => {
  const key = process.env.JWT_SECRET;
  try {
    return jwt.verify(token, key);
  } catch (error) {
    console.error("❌ Error verifying token:", error);
    return null;
  }
};

const nonSecurePaths = [
  "/",
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/register",
  "/api/auth/refreshToken",
];

// lấy token từ header Authorization: Bearer <token>
const extractToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

// middleware kiểm tra JWT
const checkUserJwt = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next();

  const tokenFromHeader = extractToken(req);

  if (tokenFromHeader) {
    const decoded = verifyToken(tokenFromHeader);
    if (decoded) {
      req.user = decoded;
      req.token = tokenFromHeader;
      return next();
    } else {
      return res.status(401).json({
        EC: -1,
        DT: "",
        EM: "Invalid or expired token",
      });
    }
  }

  return res.status(401).json({
    EC: -1,
    DT: "",
    EM: "Missing authentication token",
  });
};

// middleware kiểm tra quyền truy cập
const checkUserPermission = (req, res, next) => {
  if (nonSecurePaths.includes(req.path) || req.path === "/api/account")
    return next();

  if (!req.user)
    return res.status(401).json({
      EC: -1,
      DT: "",
      EM: "Not authenticated",
    });

  const { email, groupWithRole } = req.user;
  const roles = groupWithRole?.Roles || [];
  const currentUrl = req.path;

  const canAccess = roles.some(
    (r) => r.url === currentUrl || currentUrl.includes(r.url)
  );

  if (!canAccess) {
    return res.status(403).json({
      EC: -1,
      DT: "",
      EM: `You don't have permission to access this resource`,
    });
  }

  next();
};

// refresh token
const refreshToken = (payload) => {
  const key = process.env.JWT_REFRESH_TOKEN;
  let token = null;

  try {
    token = jwt.sign(payload, key, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_TOKEN,
    });
  } catch (error) {
    console.error("❌ Error refreshing JWT:", error);
  }

  return token;
};

export {
  createJwt,
  verifyToken,
  checkUserJwt,
  checkUserPermission,
  refreshToken,
};
