import React, { useState } from 'react'
import { CiLock } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import "../../pages/ForgotPassword//ForgotPassword.scss"
import { errorToast, successToast } from '../../utilities/toast';
import axios from 'axios';


const ResetPassword = () => {

    // get token
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const handlePasswordChange = (e) => {
        e.preventDefault();

       try {
            if (!password) {
                errorToast("please set a password");
            }else if (!cpassword) {
                errorToast("please enter a confirm password");
            }else if (password !== cpassword) {
                errorToast("password dosn't match");
            }else{
                axios.post('http://localhost:5050/api/v1/user/reset-password', { token, password})
                .then(res => {
                    successToast(`Your password change successfully`);
                    navigate('/login');
                })
                .catch(error => {
                    errorToast("Time out please try again");
                    // navigate('/login');
                });
            }
       } catch (error) {
            errorToast("Time out please try again");
       }

    }

  return (
    <div className='forgot-password'>
        <div className="header">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-12">
                        <Link className='login-logo-link' to="/"><img className='login-logo' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" /></Link>                    
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
                                    <h3>Create A Strong Password</h3>
                                    <p>Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).</p>
                                </div>
                                <form onSubmit={handlePasswordChange} className='forgot-form'>
                                    <div className="my-3">
                                        <input style={{height:"40px"}} name='password' value={password} onChange={(e) => setPassword(e.target.value) } className='form-control' type="password" placeholder='New password' />
                                        <input style={{height:"40px"}} name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value) } className='form-control my-2' type="password" placeholder='New password, again' />
                                        <button type="submit" style={{height:"40px"}} className='login-button'>Reset Password</button>  
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

export default ResetPassword
