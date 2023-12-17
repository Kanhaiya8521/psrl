import express from "express";
import ProfileController from "./profile_controller.js";
const router = express.Router();

const profileController = new ProfileController();

router.post("/addProfile", profileController.addProfile);
export default router;
