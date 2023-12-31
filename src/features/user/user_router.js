import express from "express";
import UserController from "./user_controller.js";
const router = express.Router();

const userController = new UserController();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.get("/getuser", userController.findUser);

export default router;
