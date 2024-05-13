import React, { useContext } from 'react'
import "./TopBar.scss"
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import AuthContext from '../../context/AuthContext';

const TopBar = () => {

    // get auth context
    const { user } = useContext(AuthContext);

  return (
    <div className='top-bar-container'>
        <div className="top-bar-wrapper">
            <div className="logo">
                <a href="#"></a>
            </div>
            <div className="search-box">
                <button> <GoSearch /> </button>
                <input type="text" placeholder='search' />
            </div>
            <div className="top-bar-menu">
                <ul>
                    <li><a href="#"><IoMdHome/></a></li>
                    <li><a href="#"><LuSend/></a></li>
                    <li><a href="#"><FiPlusSquare/></a></li>
                    <li><a href="#"><MdOutlineExplore/></a></li>
                    <li><a href="#"><FaRegHeart/></a></li>
                    <li><a href="#"><img src={ `${ user?.photo ? user?.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHkj6-Tndku8K2387sMaBf2DaiwfBtHQw951-fc9zzA&s' }` } alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopBar