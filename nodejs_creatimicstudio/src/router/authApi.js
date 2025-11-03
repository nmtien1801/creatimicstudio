import express from "express";
import authController from "../controller/authController";

const router = express.Router(); // bằng app = express();
/**
 *
 * @param {*} app : express app
 * @returns
 */

const AuthRoutes = (app) => {
  // middleware
  //   router.all("*", checkUserJwt, checkUserPermission);

  //rest api - dùng web sử dụng các method (CRUD)
  //GET(R), POST (C), PUT (U), DELETE (D)
  router.post("/login", authController.handleLogin);
  // router.post("/register", authController.handleRegister);
  // router.post("/logout", authController.handleLogout);
  // router.post("/changePassword", authController.changePassword);

  return app.use("/api", router);
};

export default AuthRoutes;
