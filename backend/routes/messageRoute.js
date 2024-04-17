import express from "express";
import * as controller from '../controllers/messageController.js'
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:receiverId", protectRoute, controller.getMessages);

router.post("/:receiverId", protectRoute, controller.sendMessage);

export default router;