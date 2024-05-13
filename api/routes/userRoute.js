import  express  from "express";
import { createUser, getLoggedInUser, verifyUserAccount, resetPassword, passwordChange } from "../controllers/userController.js";



// Create Router
const router = express.Router();

// routes
router.route("/register").post(createUser);
router.route("/me").get(getLoggedInUser);
router.route("/verify").post(verifyUserAccount);
router.route("/reset-password-send").post(resetPassword);
router.route("/reset-password").post(passwordChange);



// export
export default router;