import express from "express";
import * as controller from '../controllers/authController.js'
const router = express.Router();

router.get("/signup", controller.signup);

router.get("/login", controller.login);

router.get("/logout", controller.logout);

export default router;