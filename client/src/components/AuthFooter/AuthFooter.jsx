import React from 'react'
import "./AuthFooter.scss"

const AuthFooter = () => {
  return (
    <div className="auth-footer">
        <ul>
          <li><a href="#">Meta</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Instagram Lite</a></li>
          <li><a href="#">Threads</a></li>
          <li><a href="#">Contact Uploading & Non-Users</a></li>
          <li><a href="#">Meta Verified</a></li>
        </ul>
        <div className="copy-right-area">
          <select name="" id="">
            <option value="" key="">English</option>
            <option value="" key="">Bangla</option>
            <option value="" key="">Arobic</option>
          </select>
        <span className='copy-right-text'>© 2024 Instagram from Meta</span>
        </div>
      </div>
  )
}

export default AuthFooter