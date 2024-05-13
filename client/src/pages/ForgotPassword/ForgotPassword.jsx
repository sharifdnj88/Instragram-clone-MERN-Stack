import React, { useState } from 'react'
import "./ForgotPassword.scss"
import { Link, useNavigate } from 'react-router-dom'
import { CiLock } from "react-icons/ci";
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import axios from 'axios';
import { errorToast, successToast } from '../../utilities/toast';

const ForgotPassword = () => {

    // email State
    const [ email, setEmail ] = useState('');   

    const navigate = useNavigate();

    const handlePasswordRecover = (e) => {
        e.preventDefault();

        if (!email) {
            errorToast("Please enter your valid email");
            navigate('/forgot-password');
        }else{
            axios.post('http://localhost:5050/api/v1/user/reset-password-send', { email })
            .then(res => {
                console.log(res.data);
                successToast(`We sent an email to ${email} with a link to get back into your account.`);
                setEmail('');
                navigate('/login');
            })
            .catch(error => {
                console.log(error.response.data.message);
                errorToast("Email dosn't exist");
                setEmail('');
            });

        }

       

    }

  return (
    <div className='forgot-password'>
        <div className="header">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-12">
                        <a className='login-logo-link' href="#"><img className='login-logo' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" /></a>                    
                    </div>
                    <div className="divider">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="forgot-content">
            <div className="container">            
                <div className="row justify-content-center">
                    <div className="col-md-5 my-2">
                        <div className="card card-forgot-password">
                            <div className="card-body">
                                <div className="forgot-lock text-center">
                                    <CiLock />
                                </div>
                                <div className="fotgot-content">
                                    <h3>Trouble logging in?</h3>
                                    <p>Enter your email, phone, or username and we'll send you  a link to get back into your account.
                                    </p>
                                </div>
                                <form onSubmit={handlePasswordRecover} className='forgot-form'>
                                    <div className="my-3">
                                        <input style={{height:"40px"}} name='email' value={email} onChange={(e) =>setEmail(e.target.value) } className='form-control' type="text" placeholder='enter your email' />
                                        <button style={{height:"40px"}} type="submit" className='login-button'>Send login link</button>  
                                    </div>
                                </form>
                                <div className="divider">
                                    OR
                                </div>
                                <div className="new-account">
                                <Link to='/register'>Create new account</Link>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <Link to="/login" >Back to login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AuthFooter />
    </div>
  )
}

export default ForgotPassword