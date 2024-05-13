import React, { useEffect } from 'react';
import "./Verify.scss";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { errorToast, successToast } from '../../utilities/toast';

const Verify = () => {

  const {id, token} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !token) {
      errorToast("Your activation failed");
    }else{
      try {
        axios.post('http://localhost:5050/api/v1/user/verify', { id, token })
        .then(res => {
          successToast("Your activation successfull");
          navigate('/login');
        })
        .catch(error => {
          errorToast("Your activation failed");
          navigate('/login');
        });
        } catch (error) {
          errorToast("Your activation failed");
          navigate('/login');
        }
    }
  });

  return (
    <div>Verify</div>
  )
}

export default Verify;