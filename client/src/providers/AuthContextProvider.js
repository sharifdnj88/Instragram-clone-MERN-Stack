import { useReducer } from "react";
import AuthContext from "../context/AuthContext";
import cookie from "js-cookie";
import AuthReducer from "../reducers/AuthReducer";

// initial State
const INITIAL_STATE = {
    isUserLoggedIn : false,
    user: {  }
};

// create a provider
const AuthContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( AuthReducer, INITIAL_STATE );

    return (
        <AuthContext.Provider value={{
            isUserLoggedIn: state.isUserLoggedIn,
            user: state.user,
            dispatch
        }} >
            { children }
        </AuthContext.Provider>
    );
}

// export default
export default AuthContextProvider;