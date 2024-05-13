import React, { useState } from 'react'
import "./Register.scss"
import "../Login/Login.scss"
import axios from "axios"
import { FaSquareFacebook } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import AuthFooter from '../../components/AuthFooter/AuthFooter'
import swal from "sweetalert"
import { errorToast, successToast } from '../../utilities/toast'


const Register = () => {

  // state for form field 
  const [ input, setInput ] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  // handle input
  const handleInput = (e) => {
    setInput((prevState) => ({ ...prevState, [ e.target.name ] : e.target.value }));
  }

  // handle User Registration
  const handleUserRegister = async (e) => {
    e.preventDefault();

    try {
      if (!input.name || !input.email || !input.username || !input.password) {
        // swal("Danger", "All fields are required!", "error", { timer: 3000,  className: "swal-container" });
        errorToast("All fields are required!");
      }else{
        await axios.post("http://localhost:5050/api/v1/user/register", input)
        .then( res => {
          setInput((prevState) => ({
            name: "",
            email: "",
            username: "",
            password: "",
           }));
           successToast("Your account create successfully");
        } );
      }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className='login-container'>
      <div className="login-wrapper shadow-sm">
        <Link className='login-logo-link' to="/login"><img className='login-logo' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" /></Link>
        <span className='register-text'>Sign up to see photos and videos from your friends.</span>
        <a className='login-with-fb-register' href="#"> <FaSquareFacebook /> Log in with Facebook </a>
        <div className="divider">
          OR
        </div>

        <form onSubmit={handleUserRegister} className='login-form'>
            <input name='email' onChange={handleInput} className='login-input' value={input.email} type="text" placeholder='Mobile Number or Email' />
            <input name='name' onChange={handleInput} className='login-input' value={input.name} type="text" placeholder='Full Name' />
            <input name='username' onChange={handleInput} className='login-input' value={input.username} type="text" placeholder='Username' />
            <input name='password' onChange={handleInput} className='login-input' value={input.password} type="password" placeholder='Password' />
            <p className="reg-form-text">People who use our service may have uploaded your contact information to Instagram. <a className='' href="#">Learn More</a></p>
            <p className="reg-form-text">By signing up, you agree to our <a href="#">Terms</a> , <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a> .</p>
            <button type='submit' className='login-button'>Sign up</button>            
        </form>        

      </div>
      <div className="signup-wrapper shadow-sm">
        <span className='signup-text'>Have an account? <Link className='signup-link' to="/login">Log In</Link></span>
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

export default Register