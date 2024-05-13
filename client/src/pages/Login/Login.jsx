import React, { useContext, useState } from 'react'
import "./Login.scss";
import axios from 'axios';
import cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';
import { errorToast, infoToast } from '../../utilities/toast';

const Login = () => {

  //get auth Context
  const { dispatch } = useContext(AuthContext);

  // get loader context
  const { loaderDispatch } = useContext(LoaderContext);

  // Use navigate
  const navigate = useNavigate(); 


  // state for form field 
  const [input, setInput] = useState({
    auth: "",
    password: ""
  });

  // handle input
  const handleInput = (e) => {
    setInput((prevState) => ({ ...prevState, [e.target.name] : e.target.value }));
  }

  // User Login
  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      if (!input.auth || !input.password) {        
        errorToast("All fields are required!");
      }else{
        await axios.post("http://localhost:5050/api/v1/auth/login", { email : input.auth, password: input.password })
        .then( res => {        
          
          if (res.data.user.isVerified) {
            cookie.set("token", res.data.token);
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: res.data.user });       
            navigate("/");
            loaderDispatch({ type: 'LOADER_START' });
          }else{
            infoToast('Please Verify your account');
          }          
          
        } );
      }
    } catch (error) {
      errorToast("Wrong email or password");
    }

  }



  return (
    <div className='login-container'>
     
      <div className="login-wrapper shadow-sm">
        <Link className='login-logo-link' to="/login"><img className='login-logo' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" /></Link>

        <form onSubmit={handleUserLogin} className='login-form'>
            <input name='auth' value={input.auth} onChange={handleInput} className='login-input' type="text" placeholder='Phone number, Username or email' />
            <input name='password' value={input.password} onChange={handleInput}  className='login-input' type="password" placeholder='Password' />
            <button type="submit" className='login-button'>Log In</button>            
        </form>

        <div className="divider">
          OR
        </div>

        <a className='login-with-fb' href="#"> <FaSquareFacebook /> Log in with Facebook </a>
        <Link className='forgot-password' to="/forgot-password"> <FaTrashCan /> Forget Password ? </Link>

      </div>
      <div className="signup-wrapper shadow-sm">
        <span className='signup-text'>Don't have an account? <Link className='signup-link' to="/register">Sign up</Link></span>
      </div>
      <div className="get-app">
        <div className="app-text">
          <span>Get the app.</span>          
        </div>
        <div className="app-logo">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
          </div>
      </div>
      <AuthFooter />
    </div>
  )
}

export default Login