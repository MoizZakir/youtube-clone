import React from 'react'
import '../Styles/navbar.css'
import { FaRegUserCircle, FaYoutube } from "react-icons/fa"
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="logo" > <LuMenu size={20} /><FaYoutube size={30} color='red' /> <span>YouTube</span><sup>pk</sup></div>
       <div className="serachbar">
        <input type="search" placeholder='Search' />
        <button><CiSearch /></button>

       </div>
       <div className="signupbtn">
       <BsThreeDotsVertical />
       <button><FaRegUserCircle /> Sign in</button>
       </div>

    </div>
  )
}

export default Navbar