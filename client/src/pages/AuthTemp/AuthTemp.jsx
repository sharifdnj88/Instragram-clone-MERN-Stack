import React from 'react'
import AuthFooter from '../../components/AuthFooter/AuthFooter'
import { Link } from 'react-router-dom'
import { FaSquareFacebook, FaTrashCan } from 'react-icons/fa6'
import mobile from "./mobile.png"
import "./AuthTemp.scss"

const AuthTemp = () => {
  return (
    <div className='login-container'>
      <div className="auth-container">
        <div className="auth-temp-left">
            <img src={mobile} alt="" />
        </div>
        <div className="auth-temp-right">
            <div className="login-wrapper shadow-sm">
                <a className='login-logo-link' href="#"><img className='login-logo' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" /></a>

                <form action="" className='login-form'>
                    <input className='login-input' type="text" placeholder='Phone number, Username or email' />
                    <input className='login-input' type="text" placeholder='Password' />
                    <button className='login-button'>Log In</button>            
                </form>

                <div className="divider">
                OR
                </div>

                <a className='login-with-fb' href="#"> <FaSquareFacebook /> Log in with Facebook </a>
                <a className='forgot-password' href="#"> <FaTrashCan /> Forget Password ? </a>

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
        </div>
      </div>
      <AuthFooter />
    </div>
  )
}

export default AuthTemp