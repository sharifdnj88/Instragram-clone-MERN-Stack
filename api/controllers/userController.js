import User from "../models/User.js"
import swal from "sweetalert"
import { makeHash } from "../utility/hash.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utility/sendEmail.js";
import { sendSMS } from "../utility/sendSMS.js";
import { createToken, verifyToken } from "../utility/createToken.js";
import { createError } from "../utility/createError.js";


// create User
export const createUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const user = await User.create({
            name, email, username,  password: makeHash(password),
        });

        // create access token
        const token = createToken({ id: user._id });

        // Token add to User Model
        await User.findByIdAndUpdate(user._id, { accessToken: token });

        const activation_link = `http://localhost:3000/user/${user._id}/verify/${token}`;

        // send email
        await sendEmail(email, 'Verify account', {            
            name: name,
            email: email,
            link: activation_link,              
        });

        // Send SMS 
        // sendSMS();

        res.status(200).json({
            user,
            message: "User create successfully"
        });
    } catch (error) {
        console.log(error);
    }
}

// LoggedIn User
export const getLoggedInUser = async (req, res, next) => {
    try {
        // get token
        const bearer_token = req.headers.authorization;

        if (!bearer_token) {
            return res.status(404).json({ message: "Token not found" });
        }        

        let token = '';
        if (bearer_token) {
            token = bearer_token.split(' ')[1];           

            // get token user
            const logged_in_user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); 
            
            // user check
            if (!logged_in_user) {
                return res.status(400).json({ message: "Invalid Token" });
            }

            if (logged_in_user) {
                const user = await User.findById(logged_in_user.email._id);
                res.status(200).json(user);
                next();
            }


        }       

        
    } catch (error) {
        next(error)
    }    
}


// Verify User Account
export const verifyUserAccount = async (req, res, next) => {
      try {
    const { token } = req.body;

    const tokenVerify = verifyToken(token);

    if (!tokenVerify) {
      res.status(400).json({ message: "Invalid Activation Token" });
    } else {
      const activationUser = await User.findOne().where("_id").equals(tokenVerify.id);

      if (activationUser.isVerified) {
        res.status(404).json({ message: "Account already activate" });
      } else {
        const userToken = await User.findOne().where("accessToken").equals(token);

        if (!userToken) {
            res.status(404).json({ message: "Account already activate" });
        }else{
            await User.findByIdAndUpdate(tokenVerify.id, {
                isVerified : true,
                accessToken: null
            });
            res.status(200).json({ message: "Your account verify successfully" });
        }

        
      }
    }
  } catch (error) {
    next(createError(error))
  }
}

// Reset Password
export const resetPassword = async (req, res, next) => {
    try {
        const { email } = req.body;

        // check User
        const recoverUser = await User.findOne({ email });

        // check email exist
        if (!recoverUser) {
            res.status(404).json({
                message: "Email dosn't exist"
            });
        }

        if (recoverUser) {
            const token = createToken({ id: recoverUser._id }, '10m');
            const recover_url = `http://localhost:3000/recover-password/${token}`;

            await User.findByIdAndUpdate(recoverUser._id, {
                accessToken: token
            });

            sendEmail(recoverUser.email, "Reset Password", {
                name: recoverUser.name,
                email: recoverUser.email,
                link: recover_url,  
            });

            res.status(200).json({
                message: "Password reset link send"
            });

        }

        res.status(200).json(recoverUser);

    } catch (error) {
        next(createError(error));
    }
}

// Password change
export const passwordChange = async (req, res, next) => {
    try {
        // get form data
        const { token, password } = req.body;

        // get user id
        const {id} = verifyToken(token);
        
        // get user details
        if (id) {
            const userToken = await User.findOne().where("accessToken").equals(token);

            if (userToken==null) {
                res.status(400).json('Already change your password');
            }else{
                const user_details = await User.findByIdAndUpdate(id, {
                    password: makeHash(password),
                    accessToken: null
                });
                res.send("Password change successfully");
            }            
        }

    } catch (error) {
        next(createError(401, "Token expired"))
    }
}