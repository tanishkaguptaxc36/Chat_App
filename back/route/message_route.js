import express from "express";
import { getMessage, sendMessage } from "../controler/message_controler.js";
import secureRoute from "../middleware/secureroute.js";

const router = express.Router();
router.post("/send/:id", secureRoute, sendMessage);
router.get("/get/:id", secureRoute, getMessage);

export default  router;