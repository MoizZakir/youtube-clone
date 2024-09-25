import React from 'react'
import Sidebaritems from './Sidebaritems'
import '../Styles/navbar.css'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { SiLinkfire, SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { IoIosHelpCircleOutline } from "react-icons/io"
import { RiFeedbackLine } from "react-icons/ri";
import { MdDynamicFeed, MdSubscriptions } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { FaRegUserCircle } from 'react-icons/fa';
import { CgMusicNote } from "react-icons/cg";
import { BsNewspaper } from 'react-icons/bs';
import { CiFlag1, CiTrophy } from 'react-icons/ci';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Sidebaritems name='Home' logo={<IoHomeOutline />}/>
        <Sidebaritems name='Shorts' logo={<SiYoutubeshorts/>}/>
        <Sidebaritems name='Subscription' logo={<MdSubscriptions />} />
        <hr />
        <Sidebaritems name='You' logo={<MdDynamicFeed />} />
        <Sidebaritems name='History' logo={<AiOutlineHistory />} />
        <hr />
        <div className='sidebar-body-item'>
            <p>Sign in to like videos, comment, and subscribe</p>
            <div className="sidebar-body-item-div">
      
       <button><FaRegUserCircle /> Sign in</button>
       </div>
        </div>
        <hr />
        <h3 style={{padding:'10px 20px'}} >Explore</h3>
        <Sidebaritems name='Trending' logo={<SiLinkfire />} />
        <Sidebaritems name='Music' logo={<CgMusicNote />} />
        <Sidebaritems name='Gaming' logo={<SiYoutubegaming />} />
        <Sidebaritems name='News' logo={<BsNewspaper />} />
        <Sidebaritems name='Sports' logo={<CiTrophy />} />
        <hr />
        <Sidebaritems name='Setting' logo={<IoSettingsOutline />} />
        <Sidebaritems name='Report history' logo={<CiFlag1 />} />
        <Sidebaritems name='help' logo={<IoIosHelpCircleOutline />} />
        <Sidebaritems name='Feedback' logo={<RiFeedbackLine />} />


    </div>
  )
}

export default Sidebar