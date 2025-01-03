import express from "express";
import { signup, login, logout, getuserProfile } from "../controler/user_controler.js";
import secureRoute from "../middleware/secureroute.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/getUserprofile",secureRoute, getuserProfile);


export default router;