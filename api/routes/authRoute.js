import  express  from "express";
import { loginUser } from "../controllers/authController.js";



// Create Router
const router = express.Router();

// routes
router.route("/login").post(loginUser);



// export
export default router;