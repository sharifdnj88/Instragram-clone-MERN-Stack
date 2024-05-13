import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import mongoDBConnect from "./config/db.js";
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"

// init express
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Set Static
app.use(express.static("api/public"));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);

// Environment Variable
const PORT = process.env.PORT || 9090;


// Listen
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`.bgGreen.black);
    mongoDBConnect();
});