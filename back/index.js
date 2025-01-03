import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/userroute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageroute from "./route/message_route.js";
import { app, server } from "./socketio/server.js"





dotenv.config();
app.use(express.json())

app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5002;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI)
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);

}

app.use("/api/user", userRoute);
app.use("/api/message", messageroute);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});