import React from 'react'
import Sidebaritems from './Sidebaritems'
import '../Styles/navbar.css'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { SiLinkfire, SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { IoIosHelpCircleOutline, IoMdLogOut } from "react-icons/io"
import { RiFeedbackLine } from "react-icons/ri";
import { MdDynamicFeed, MdSubscriptions } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { FaRegUserCircle } from 'react-icons/fa';
import { CgMusicNote } from "react-icons/cg";
import { BsNewspaper } from 'react-icons/bs';
import { CiFlag1, CiTrophy } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/UserReducers';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector((state)=>state.user?.currentUser)
  return (
    <div className='sidebar'>
        <Sidebaritems name='Home' logo={<IoHomeOutline onClick={()=>{navigate('/')}} />}/>
        <Sidebaritems name='Shorts' logo={<SiYoutubeshorts/>}/>
        {user&&(   <Sidebaritems name='Create' logo={<MdSubscriptions  onClick={()=>navigate('/create')}/>} />)}
        <hr />
        <Sidebaritems name='You' logo={<MdDynamicFeed />} />
        <Sidebaritems name='History' logo={<AiOutlineHistory />} />
        <hr />
        <div className='sidebar-body-item'>
            <p>Sign in to like videos, comment, and subscribe</p>
            <div className="sidebar-body-item-div">
      
       <button onClick={()=>navigate('/login')}><FaRegUserCircle /> Sign in</button>
       </div>
        </div>
        <hr />
        <h3 style={{padding:'10px 20px'}} >Explore</h3>
        <Sidebaritems name='Trending' logo={<SiLinkfire />} />
        <Sidebaritems name='Music' logo={<CgMusicNote />} />
        <Sidebaritems name='Gaming' logo={<SiYoutubegaming />} />
        <Sidebaritems name='News' logo={<BsNewspaper />} />
        <Sidebaritems  name='Sports' logo={<CiTrophy />} />
        <hr />
        <Sidebaritems name='Setting' logo={<IoSettingsOutline />} />
        <Sidebaritems name='Report history' logo={<CiFlag1 />} />
        <Sidebaritems name='help' logo={<IoIosHelpCircleOutline />} />
       {user&&( <Sidebaritems  name='logout' logo={<IoMdLogOut style={{padding:'5px'}}   onClick={()=>dispatch(logout())} />} />
)}

    </div>
  )
}

export default Sidebar