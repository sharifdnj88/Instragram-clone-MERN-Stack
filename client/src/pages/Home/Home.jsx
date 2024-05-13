import React, { useContext } from 'react'
import "./Home.scss"
import AuthTemp from '../AuthTemp/AuthTemp'
import TopBar from '../../components/TopBar/TopBar'
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import cookie from "js-cookie"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';
import profile from "./profile.png";

const Home = () => {

  // get auth context
  const { dispatch, user } = useContext(AuthContext);

  // get loader context
  const { loaderDispatch } = useContext(LoaderContext);

  // navigate
  const navigate = useNavigate();

  // Logout User
  const handleUserLougout = (e) => {
    e.preventDefault();

    cookie.remove('token');
    cookie.remove('user');
    dispatch({ type: 'USER_LOGOUT' });
    navigate('/login');
    loaderDispatch({ type: "LOADER_START" });

  };
    

  return (
    <div>
      {/* <AuthTemp /> */}
      <TopBar />
      <div className="home-container">
        <div className="home-wrapper">
          <div className="time-line">
            <div className="post-card">
              <div className="post-card-header">
                <div className="post-user-info">
                  <a href="#"><img src={profile} alt="" /></a>
                  <div className="user-details">
                    <a className="user-name" href="#">{user.name}</a>
                    <span className='location'>Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button><BsThreeDots /></button>
                </div>
              </div>
              <div className="post-image">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/NL/UR/OO/42841893/designer-office-wallpaper-500x500.jpg" alt="" />
              </div>
              <div className="timeline-icons">
                <div className="icons-left">
                  <a href="#"><FaRegHeart/></a>
                  <a href="#"><BiMessageRounded/></a>
                  <a href="#"><LuSend/></a>
                </div>
                <div className="icons-right">
                  <a href="#"><FaRegBookmark/></a>
                </div>
              </div>
              <div className="post-details">
                <span className='likes'>102 likes</span>
                <div className="post-content">
                  <a href="#">Shariful Islam</a>&nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, iure dolorum nostrum quae unde corrupti laborum dolorem odit fuga?
                </div>
                <div className="post-view-comments">
                  <span>View all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="post-comments">
                <a href="#"><CiFaceSmile /></a>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>
            <div className="post-card">
              <div className="post-card-header">
                <div className="post-user-info">
                  <a href="#"><img src={profile} alt="" /></a>
                  <div className="user-details">
                    <a className="user-name" href="#">{user.name}</a>
                    <span className='location'>Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button><BsThreeDots /></button>
                </div>
              </div>
              <div className="post-image">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/NL/UR/OO/42841893/designer-office-wallpaper-500x500.jpg" alt="" />
              </div>
              <div className="timeline-icons">
                <div className="icons-left">
                  <a href="#"><FaRegHeart/></a>
                  <a href="#"><BiMessageRounded/></a>
                  <a href="#"><LuSend/></a>
                </div>
                <div className="icons-right">
                  <a href="#"><FaRegBookmark/></a>
                </div>
              </div>
              <div className="post-details">
                <span className='likes'>102 likes</span>
                <div className="post-content">
                  <a href="#">Shariful Islam</a>&nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, iure dolorum nostrum quae unde corrupti laborum dolorem odit fuga?
                </div>
                <div className="post-view-comments">
                  <span>View all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="post-comments">
                <a href="#"><CiFaceSmile /></a>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>
            <div className="post-card">
              <div className="post-card-header">
                <div className="post-user-info">
                  <a href="#"><img src={profile} alt="" /></a>
                  <div className="user-details">
                    <a className="user-name" href="#">{user.name}</a>
                    <span className='location'>Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button><BsThreeDots /></button>
                </div>
              </div>
              <div className="post-image">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/NL/UR/OO/42841893/designer-office-wallpaper-500x500.jpg" alt="" />
              </div>
              <div className="timeline-icons">
                <div className="icons-left">
                  <a href="#"><FaRegHeart/></a>
                  <a href="#"><BiMessageRounded/></a>
                  <a href="#"><LuSend/></a>
                </div>
                <div className="icons-right">
                  <a href="#"><FaRegBookmark/></a>
                </div>
              </div>
              <div className="post-details">
                <span className='likes'>102 likes</span>
                <div className="post-content">
                  <a href="#">Shariful Islam</a>&nbsp;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, iure dolorum nostrum quae unde corrupti laborum dolorem odit fuga?
                </div>
                <div className="post-view-comments">
                  <span>View all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="post-comments">
                <a href="#"><CiFaceSmile /></a>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>
          </div>
          <div className="user-info"> 
            <div className="user-details">
              <a href="#">
              <img src={ `${ user?.photo ? user?.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHkj6-Tndku8K2387sMaBf2DaiwfBtHQw951-fc9zzA&s' }` } alt="" />
              </a>
              <div className="user-name">
                <a href='#' className='username'>{user?.username}</a>
                <span className='name'>{user?.name}</span>
                <a href='#' onClick={handleUserLougout}>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home