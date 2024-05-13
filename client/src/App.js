import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import AuthenticateUser from "./middlewares/AuthenticateUser";
import AuthRedirectUser from "./middlewares/AuthRedirectUser";
import Cookies from "js-cookie"
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import LoadingBar from 'react-top-loading-bar'
import LoaderContext from "./context/LoaderContext";
import { infoToast } from "./utilities/toast";
import { ToastContainer } from "react-toastify";
import Verify from "./components/Verify/Verify";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";


function App() {

  // get auth context
  const { dispatch } = useContext(AuthContext);

  // get loader context
  const { loaderState, loaderDispatch } = useContext(LoaderContext)

  const token = Cookies.get('token');
  
  // Checked Log in User
  useEffect(() => {
    
    try {
      axios.get('http://localhost:5050/api/v1/user/me', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then( res => {

        if ( res.data.isVerified && token ) {
          dispatch({ type: 'LOGIN_USER_SUCCESS', payload: res.data });          
        }else{
          infoToast('Please Verify your account');
          Cookies.remove('token');
        }

      } )
      .catch( error => {
        dispatch({ type: 'USER_LOGOUT' });
      } )
    } catch (error) {
      console.log(error);
    }
    
    
  }, [token]);

  return (
    <>
       <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch( { type: 'LOADER_END' } )}
      />
       <ToastContainer />
      <Routes>
          <Route path="/" element={ <AuthenticateUser> <Home /> </AuthenticateUser> } />
          <Route path="/login" element={ <AuthRedirectUser> <Login /> </AuthRedirectUser> } />
          <Route path="/register" element={ <AuthRedirectUser> <Register /> </AuthRedirectUser> } />
          <Route path="/:id" element={ <AuthenticateUser> <Profile /> </AuthenticateUser> } />
          <Route path="/user/:id/verify/:token" element={ <Verify /> } />
          <Route path="/forgot-password" element={ <ForgotPassword /> } />
          <Route path="/recover-password/:token" element={ <ResetPassword /> } />
      </Routes>
    </>
  );
}

export default App;
