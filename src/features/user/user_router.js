import express from "express";
import UserController from "./user_controller.js";
const router = express.Router();

const userController = new UserController();

router.post("/add", userController.addUser);
router.get("/get", userController.getUser);
export default router;
