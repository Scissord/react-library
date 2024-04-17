import express from "express";
import * as controller from '../controllers/userController.js'
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, controller.getUsers);

export default router;