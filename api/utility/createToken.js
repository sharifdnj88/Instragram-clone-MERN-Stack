import jwt from "jsonwebtoken";

// Create a token
export const createToken = (data, expire = 600000) => {
    const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn : expire
    });
    return token;
}

/**
 * Verify Token
*/
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}