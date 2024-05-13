import bcryptjs from 'bcryptjs';

/**
 * Make a Hash Password 
 */
export const makeHash = (password) => {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password, salt);
    return hash;
} 